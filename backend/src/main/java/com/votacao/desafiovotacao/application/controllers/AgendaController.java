package com.votacao.desafiovotacao.application.controllers;

import com.votacao.desafiovotacao.application.dtos.AgendaDTO;
import com.votacao.desafiovotacao.domain.entities.Agenda;
import com.votacao.desafiovotacao.domain.exceptions.AgendaNotValidException;
import com.votacao.desafiovotacao.domain.services.AgendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/agenda")
public class AgendaController {

    @Autowired
    private AgendaService agendaService;

    @PostMapping
    @CrossOrigin("*")
    public ResponseEntity<Agenda> createAgenda(@RequestBody AgendaDTO agendaDTO) throws AgendaNotValidException {
        try {
            return new ResponseEntity<>(agendaService.createAgenda(agendaDTO), HttpStatus.CREATED);

        // TODO: fix this exception handling
        } catch (AgendaNotValidException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    @CrossOrigin("*")
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(agendaService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @CrossOrigin("*")
    public ResponseEntity<?> get(@PathVariable(value = "id") String id) {
        return new ResponseEntity<>(agendaService.get(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    @CrossOrigin("*")
    public ResponseEntity<?> update(@PathVariable(value = "id") String id, @RequestBody AgendaDTO agendaDTO) {
        return new ResponseEntity<>(agendaService.update(id, agendaDTO), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin("*")
    public ResponseEntity<?> delete(@PathVariable(value = "id") String id) {
        agendaService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping
    @CrossOrigin("*")
    public ResponseEntity<?> deleteAll() {
        agendaService.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
