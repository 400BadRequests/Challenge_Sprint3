package com.example.api_reconhecimentogestos.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Calendar;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Table(name = "TB_ATENDIMENTO")
@SequenceGenerator(name = "atendimento", sequenceName = "SQ_TB_ATENDIMENTO", allocationSize = 1)
public class Atendimento {
    @Id
    @GeneratedValue(generator = "atendimento", strategy = GenerationType.SEQUENCE)
    @Column(name = "ID_ATENDIMENTO")
    private Long id;

    @Column(name = "DURACAO_MINUTO", nullable = false)
    private Integer duracaoMinutos;

    @Column(name = "ASSUNTO", nullable = false)
    private String assunto;

    @Temporal(TemporalType.DATE)
    @Column(name = "DATA", nullable = false)
    private Calendar data;

    @ManyToOne
    @JoinColumn(name = "funcionario")
    private Funcionario funcionario;

    @OneToMany(mappedBy = "atendimento")
    private List<Pergunta> perguntas;

    public Long getFuncionarioId(){
        return getFuncionario().getId();
    }
}
