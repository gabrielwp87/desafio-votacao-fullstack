package com.votacao.desafiovotacao.domain.services;

import com.votacao.desafiovotacao.domain.entities.Agenda;
import com.votacao.desafiovotacao.domain.entities.Session;
import com.votacao.desafiovotacao.domain.exceptions.AgendaNotFoundException;
import com.votacao.desafiovotacao.domain.exceptions.SessionTimeException;
import com.votacao.desafiovotacao.infra.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class SessionService {

    private static final Long TIME_DEFAULT = 1L;

    @Autowired
    SessionRepository sessionRepository;

    public Optional<Session> save(Session session) {
        return Optional.ofNullable(sessionRepository.save(session));
    }

    public Optional<Session> get(String sessionId) {
        return sessionRepository.findById(sessionId);
    }


    public ResponseEntity<Session> startSession(Long minutesOpened, Agenda agenda) {
        if (minutesOpened == null) {
            minutesOpened = TIME_DEFAULT;
        }

        Session session = Session.builder()
                .agendaId(agenda.getId())
                .startTime(LocalDateTime.now())
                .closedTime(LocalDateTime.now().plusMinutes(minutesOpened))
                .status(Session.StatusSession.ABERTA)
                .build();

        Optional<Session> optionalSessionEntity = save(session);

        if (optionalSessionEntity.isPresent()) {
            return new ResponseEntity<>(optionalSessionEntity.get(), HttpStatus.CREATED);

        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public void validatePostSessionRequest(Optional<Agenda> optionalAgenda, Long minutesOpened)
            throws AgendaNotFoundException, SessionTimeException {

        if (!optionalAgenda.isPresent()) {
            throw new AgendaNotFoundException();
        }

        if (ObjectUtils.isEmpty(minutesOpened) || minutesOpened < TIME_DEFAULT) {
            throw new SessionTimeException();

        }
    }
}
