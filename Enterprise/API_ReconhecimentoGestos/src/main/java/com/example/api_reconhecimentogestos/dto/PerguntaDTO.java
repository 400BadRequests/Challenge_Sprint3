package com.example.api_reconhecimentogestos.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
public class PerguntaDTO {
    private Long id;
    private byte[] img_pergunta;
    private Long idAtendimento;
}
