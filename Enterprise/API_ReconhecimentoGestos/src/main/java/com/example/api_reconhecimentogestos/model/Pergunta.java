package com.example.api_reconhecimentogestos.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Table(name = "TB_PERGUNTA")
@SequenceGenerator(name = "pergunta", sequenceName = "SQ_TB_PERGUNTA", allocationSize = 1)
public class Pergunta {

    @Id
    @GeneratedValue(generator = "pergunta", strategy = GenerationType.SEQUENCE)
    @Column(name = "ID_PERGUNTA")
    private Long id;

    @Column(name = "BYTE_IMG", nullable = false)
    private byte[] img_pergunta;

    @ManyToOne
    @JoinColumn(name = "Atendimento")
    private Atendimento atendimento;

    @OneToOne(mappedBy = "pergunta")
    private Resposta resposta;

}
