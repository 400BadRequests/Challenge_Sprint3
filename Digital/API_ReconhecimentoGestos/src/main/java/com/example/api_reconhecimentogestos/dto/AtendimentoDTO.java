package com.example.api_reconhecimentogestos.dto;

import com.example.api_reconhecimentogestos.model.Funcionario;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Calendar;

@NoArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
public class AtendimentoDTO {
    private Long id;
    private Integer duracaoMinutos;
    private String assunto;
    @Temporal(TemporalType.DATE)
    private Calendar data;
    private Funcionario funcionario;
}
