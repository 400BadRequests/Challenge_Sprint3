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
@Table(name = "TB_FUNCIONARIO")
@SequenceGenerator(name = "funcionario", sequenceName = "SQ_TB_FUNCIONARIO", allocationSize = 1)
public class Funcionario {

    @Id
    @GeneratedValue(generator = "funcionario",strategy = GenerationType.IDENTITY)
    @Column(name = "ID_FUNCIONARIO")
    private Long id;

    @Column(name = "NOME_COMPLETO", nullable = false, length = 80)
    private String nomeCompleto;

    @Column(name = "EMAIL", nullable = false, length = 50)
    private String email;

    @Column(name = "SENHA", nullable = false, length = 30)
    private String senha;

    @Temporal(TemporalType.DATE)
    @Column(name = "DATA_CADASTRO", nullable = false)
    private Calendar dataCadastro;

    @Column(name = "NUMERO_TELEFONE", nullable = false)
    private String numeroTelefone;

    @OneToMany(mappedBy = "funcionario")
    private List<Atendimento> atendimentos;
}
