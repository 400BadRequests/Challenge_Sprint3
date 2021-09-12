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
@Table(name = "TB_RESPOSTA")
@SequenceGenerator(name = "resposta", sequenceName = "SQ_TB_PERGUNTA", allocationSize = 1)
public class Resposta {

    @Id
    @GeneratedValue(generator = "respota", strategy = GenerationType.SEQUENCE)
    @Column(name = "ID_RESPOSTA")
    private Long id;

    @Column(name = "TEXTO", length = 50, nullable = false)
    private String texto;

    @OneToOne
    private Pergunta pergunta;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public Pergunta getPergunta() {
        return pergunta;
    }

    public void setPergunta(Pergunta pergunta) {
        this.pergunta = pergunta;
    }
}
