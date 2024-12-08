package com.votacao.desafiovotacao.domain.services;

import com.votacao.desafiovotacao.domain.entities.Agenda;
import com.votacao.desafiovotacao.infra.AgendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendaService {

    @Autowired
    private AgendaRepository agendaRepository;

    public List<Agenda> findAll() {
        return agendaRepository.findAll();
    }

    public Agenda findById(String id) {
        return agendaRepository.findById(id).orElse(null);
    }

    public Agenda save(Agenda agenda) {
        return agendaRepository.save(agenda);
    }
}
