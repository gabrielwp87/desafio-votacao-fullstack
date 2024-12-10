package com.votacao.desafiovotacao.application.controllers;

import com.votacao.desafiovotacao.application.dtos.VoteDTO;
import com.votacao.desafiovotacao.domain.exceptions.AlreadyVotedException;
import com.votacao.desafiovotacao.domain.exceptions.NoSessionToVoteException;
import com.votacao.desafiovotacao.domain.services.AgendaService;
import com.votacao.desafiovotacao.domain.services.SessionService;
import com.votacao.desafiovotacao.domain.services.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/agenda/session/associated")
public class VoteController {

    @Autowired
    private AgendaService agendaService;

    @Autowired
    private SessionService sessionService;

    @Autowired
    private VoteService voteService;

    @PostMapping("/vote")
    @CrossOrigin("*")
    public ResponseEntity<?> registerVote(@RequestBody VoteDTO voteDTO) throws AlreadyVotedException, NoSessionToVoteException {
        try {
            return new ResponseEntity<>(voteService.registerVote(voteDTO), HttpStatus.OK);
        } catch (AlreadyVotedException e) {
            return new ResponseEntity<>("Associated already voted", HttpStatus.BAD_REQUEST);
        } catch (NoSessionToVoteException e) {
            return new ResponseEntity<>("Can't vote in without a session", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/result")
    @CrossOrigin("*")
    public ResponseEntity<?> getResult(@RequestParam (value = "sessionId") String sessionId) {
        return new ResponseEntity<>(voteService.getVotesResult(sessionId) , HttpStatus.OK);
    }

    @GetMapping("/vote")
    @CrossOrigin("*")
    public ResponseEntity<?> getVote(@RequestParam (value = "voteId") String voteId) {
        return new ResponseEntity<>(voteService.get(voteId), HttpStatus.OK);
    }

    @GetMapping
    @CrossOrigin("*")
    public ResponseEntity<?> getVotes() {
        return new ResponseEntity<>(voteService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/vote/{id}")
    @CrossOrigin("*")
    public ResponseEntity<?> deleteVote(@PathVariable (value = "id") String id) {
        voteService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/votes")
    @CrossOrigin("*")
    public ResponseEntity<?> deleteVotes() {
        voteService.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/votes/result/{session_id}")
    @CrossOrigin("*")
    public ResponseEntity<?> getVotesResult(@PathVariable (value = "session_id") String session_id) {
        return new ResponseEntity<>(voteService.getVotesResult(session_id), HttpStatus.OK);
    }
}
