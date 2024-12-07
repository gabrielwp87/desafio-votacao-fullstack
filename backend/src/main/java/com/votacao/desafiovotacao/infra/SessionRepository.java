package com.votacao.desafiovotacao.infra;

import com.votacao.desafiovotacao.domain.entities.Session;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SessionRepository extends MongoRepository<Session, String> {
    // Consult open sessions
    List<Session> findByStatus(Session.StatusSession status);
}
