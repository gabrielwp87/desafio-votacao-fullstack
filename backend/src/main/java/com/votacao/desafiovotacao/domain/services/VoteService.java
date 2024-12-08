package com.votacao.desafiovotacao.domain.services;

import com.votacao.desafiovotacao.domain.entities.Session;
import com.votacao.desafiovotacao.domain.entities.Vote;
import com.votacao.desafiovotacao.infra.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.votacao.desafiovotacao.application.dtos.VoteDTO;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class VoteService {

    private static final String VOTE_YES = "SIM";

    @Autowired
    private VoteRepository voteRepository;

    public Optional<Vote> save(Vote vote) {
        return Optional.ofNullable(voteRepository.save(vote));
    }

    public List<Vote> findAll() {
        return voteRepository.findAll();
    }

    public ResponseEntity<VoteDTO> getVotes(String sessionId) {
        List<Vote> selectedVotes = selectVotesPerSession(sessionId);
        Long totalVotesYes = 0L;
        Long totalVotesNo = 0L;

        for (Vote vote : selectedVotes) {
            if (vote.getVote().equals(VOTE_YES)) {
                totalVotesYes++;

            } else {
                totalVotesNo++;

            }
        }
        VoteDTO voteDTO = VoteDTO.builder()
                .votesYes(String.valueOf(totalVotesYes))
                .votesNo(String.valueOf(totalVotesNo))
                .build();

        return new ResponseEntity<>(voteDTO, HttpStatus.OK);
    }

    public List<Vote> selectVotesPerSession(String sessionId) {
        List<Vote> listVote = findAll();

        return listVote
                .stream()
                .filter(e -> e.getSession().getId().equals(sessionId))
                .collect(Collectors.toList());
    }

    public ResponseEntity<Vote> voteSession(String associatedVote, String associatedId, Session session) {
        Vote vote = Vote.builder()
                .vote(associatedVoteHandler(associatedVote))
                .associatedId(associatedId)
                .session(session)
                .build();

        Optional<Vote> optionalVoteEntity = save(vote);

        return optionalVoteEntity.map(value -> new ResponseEntity<>(value, HttpStatus.CREATED))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    private String associatedVoteHandler(String associatedVote) {
        return associatedVote.toUpperCase();
    }

    public Boolean validateAssociateAlreadyVote(Session session, String associatedId) {
        List<Vote> listVoteEntity = voteRepository.findAllBySession(session);

        return listVoteEntity
                .stream()
                .anyMatch(entity ->
                        entity.getAssociatedId().equals(associatedId)
                );
    }
}
