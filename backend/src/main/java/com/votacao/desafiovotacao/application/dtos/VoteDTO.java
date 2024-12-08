package com.votacao.desafiovotacao.application.dtos;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class VoteDTO {
    private String votesYes;
    private String votesNo;
}
