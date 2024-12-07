package com.votacao.desafiovotacao.infra;

import com.votacao.desafiovotacao.domain.entities.Agenda;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AgendaRepository extends MongoRepository<Agenda, String> {
}
