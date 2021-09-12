package com.example.api_reconhecimentogestos.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
public class RespostaDTO {
    private Long id;
    private String texto;
    private Long idPergunta;
}
