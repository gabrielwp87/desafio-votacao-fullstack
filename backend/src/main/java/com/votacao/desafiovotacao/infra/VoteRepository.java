package com.votacao.desafiovotacao.infra;

import com.votacao.desafiovotacao.domain.entities.Session;
import com.votacao.desafiovotacao.domain.entities.Vote;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface VoteRepository extends MongoRepository<Vote, String> {
    // Search all votes from a session
    List<Vote> findAllBySession(Session session);
}
