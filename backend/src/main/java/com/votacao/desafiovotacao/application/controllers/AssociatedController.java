package com.votacao.desafiovotacao.application.controllers;

import com.votacao.desafiovotacao.application.dtos.AssociatedDTO;
import com.votacao.desafiovotacao.domain.entities.Associated;
import com.votacao.desafiovotacao.domain.services.AssociatedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/associated")
public class AssociatedController {

    @Autowired
    private AssociatedService associatedService;

    @PostMapping("/create")
    @CrossOrigin("*")
    public ResponseEntity<Associated> createAssociated(@RequestBody AssociatedDTO associatedDTO) {
        return new ResponseEntity<>(associatedService.createAssociated(associatedDTO), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    @CrossOrigin("*")
    public ResponseEntity<?> get(@PathVariable(value = "id") String id) {
        return new ResponseEntity<>(associatedService.get(id), HttpStatus.OK);
    }

    @GetMapping
    @CrossOrigin("*")
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(associatedService.findAll(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    @CrossOrigin("*")
    public ResponseEntity<?> update(@PathVariable(value = "id") String id, @RequestBody AssociatedDTO associatedDTO) {
        return new ResponseEntity<>(associatedService.update(id, associatedDTO), HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    @CrossOrigin("*")
    public ResponseEntity<?> delete(@PathVariable(value = "id") String id) {
        associatedService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping
    @CrossOrigin("*")
    public ResponseEntity<?> deleteAll() {
        associatedService.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
