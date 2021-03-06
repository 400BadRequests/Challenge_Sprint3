/*
    
    Luiz Phelipe - 86330
    Christian Chang - 86360
    Paulo Sérgio- 85873
    Gabriel Silva - 86404
    Caio Augusto - 82953
*/  


CREATE TABLE TB_FUNCIONARIO (
    ID_FUNCIONARIO INTEGER NOT NULL,
    NOME_COMPLETO VARCHAR(80) NOT NULL,
    EMAIL VARCHAR(50) NOT NULL,
    SENHA VARCHAR(30) NOT NULL,
    DATA_CADASTRO TIMESTAMP NOT NULL,
    NUMERO_TELEFONE VARCHAR(13),
    PRIMARY KEY (ID_FUNCIONARIO)
);

CREATE TABLE TB_ATENDIMENTO (
    ID_ATENDIMENTO INTEGER NOT NULL,
    ID_FUNCIONARIO INTEGER NOT NULL,
    DURACAO_MINUTOS INTEGER,
    ASSUNTO VARCHAR(30),
    DATA TIMESTAMP NOT NULL,
    PRIMARY KEY (ID_ATENDIMENTO),
    FOREIGN KEY (ID_FUNCIONARIO) REFERENCES TB_FUNCIONARIO(ID_FUNCIONARIO)
);

CREATE TABLE TB_PERGUNTA (
    ID_PERGUNTA INTEGER NOT NULL,
    ID_ATENDIMENTO INTEGER NOT NULL,
    TEXTO VARCHAR(100) NOT NULL,
    DURACAO_SEGUNDOS INTEGER,
    PRIMARY KEY (ID_PERGUNTA),
    FOREIGN KEY (ID_ATENDIMENTO) REFERENCES TB_ATENDIMENTO(ID_ATENDIMENTO)
);

CREATE TABLE TB_SINAL (
    ID_SINAL INTEGER NOT NULL,
    ID_PERGUNTA INTEGER NOT NULL,
    TEXTO VARCHAR(50) NOT NULL,
    TEMPO_RECONHECIMENTO_SEGUNDOS INTEGER NOT NULL,
    PRIMARY KEY (ID_SINAL),
    FOREIGN KEY (ID_PERGUNTA) REFERENCES TB_PERGUNTA(ID_PERGUNTA)
);

CREATE TABLE TB_RESPOSTA (
    ID_RESPOSTA INTEGER NOT NULL,
    ID_PERGUNTA INTEGER NOT NULL,
    TEXTO VARCHAR(100) NOT NULL,
    DURACAO_SEGUNDOS INTEGER,
    PRIMARY KEY (ID_RESPOSTA),
    FOREIGN KEY (ID_PERGUNTA) REFERENCES TB_PERGUNTA(ID_PERGUNTA)
);

INSERT INTO TB_FUNCIONARIO VALUES (
    1,
    'Paulo Sérgio Guedes Porfírio',
    'paulogued.pf@gmail.com',
    'recognitionProgram1',
    TIMESTAMP '2021-05-05 13:00:00',
    '5511948896461'
);

INSERT INTO TB_ATENDIMENTO VALUES (
    1,
    1,
    5,
    'Falar com gerente da empresa',
    TIMESTAMP '2021-05-05 18:00:00'
);

INSERT INTO TB_PERGUNTA VALUES (
    1,
    1,
    'Quem é o gerente?',
    26
);

INSERT INTO TB_SINAL VALUES (
    1,
    1,
    'quem',
    8
);

INSERT INTO TB_SINAL VALUES (
    2,
    1,
    'é',
    5
);

INSERT INTO TB_SINAL VALUES (
    3,
    1,
    'o',
    5
);

INSERT INTO TB_SINAL VALUES (
    4,
    1,
    'gerente',
    8
);

INSERT INTO TB_RESPOSTA VALUES (
    1,
    1,
    'Daniel Guedes',
    15
);

INSERT INTO TB_PERGUNTA VALUES (
    2,
    1,
    'Onde ele está?',
    23
);

INSERT INTO TB_SINAL VALUES (
    5,
    2,
    'onde',
    7
);

INSERT INTO TB_SINAL VALUES (
    6,
    2,
    'ele',
    8
);

INSERT INTO TB_SINAL VALUES (
    7,
    2,
    'está',
    8
);

INSERT INTO TB_RESPOSTA VALUES (
    2,
    2,
    '2º andar, sala 15',
    20
);

CREATE OR REPLACE FUNCTION pega_nome
        (p_ID_FUNCIONARIO IN TB_FUNCIONARIO.ID_FUNCIONARIO%TYPE)
        RETURN VARCHAR2
    IS
        v_NOME_COMPLETO TB_FUNCIONARIO.NOME_COMPLETO%TYPE :='Sem Nome';
    BEGIN
        SELECT NOME_COMPLETO
            INTO v_NOME_COMPLETO
            FROM TB_FUNCIONARIO
            WHERE ID_FUNCIONARIO = p_ID_FUNCIONARIO;
        RETURN v_NOME_COMPLETO;
    END pega_nome;
    
SELECT ID_FUNCIONARIO, PEGA_NOME(1) FROM TB_FUNCIONARIO;
        
    
CREATE OR REPLACE PROCEDURE pega_atendimento(id NUMBER) 
IS
  r_atendimento TB_ATENDIMENTO%rowtype;
BEGIN
    SELECT *
    INTO r_atendimento
    FROM TB_ATENDIMENTO
    WHERE ID_ATENDIMENTO = p_ID_ATENDIMENTO;
    
    dbms_output.put_line('Id do funcionário: ' || r_atendimento.ID_FUNCIONARIO ||
     '. Duração da interação:' ||r_atendimento.DURACAO_MINUTOS ||
     '. Assunto:
     ' ||r_atendimento.ASSUNTO);
     
EXCEPTION
   WHEN OTHERS THEN
      dbms_output.put_line( SQLERRM );
END;

EXEC pega_atendimento(1);

CREATE OR REPLACE PACKAGE pacote_funcoes
IS
    FUNCTION pega_nome
        (p_ID_FUNCIONARIO IN TB_FUNCIONARIO.ID_FUNCIONARIO%TYPE)
        RETURN VARCHAR2
    IS
        v_NOME_COMPLETO TB_FUNCIONARIO.NOME_COMPLETO%TYPE :='Sem Nome';
    BEGIN
        SELECT NOME_COMPLETO
            INTO v_NOME_COMPLETO
            FROM TB_FUNCIONARIO
            WHERE ID_FUNCIONARIO = p_ID_FUNCIONARIO;
        RETURN v_NOME_COMPLETO; 
        
        PROCEDURE pega_atendimento(id NUMBER) 
IS
  r_atendimento TB_ATENDIMENTO%rowtype;
BEGIN
    SELECT *
    INTO r_atendimento
    FROM TB_ATENDIMENTO
    WHERE ID_ATENDIMENTO = p_ID_ATENDIMENTO;
    
    dbms_output.put_line('Id do funcionário: ' || r_atendimento.ID_FUNCIONARIO ||
     '. Duração da interação:' ||r_atendimento.DURACAO_MINUTOS ||
     '. Assunto:
     ' ||r_atendimento.ASSUNTO);
     
EXCEPTION
   WHEN OTHERS THEN
      dbms_output.put_line( SQLERRM );
END;

    END pacote_funcoes;
    
    
        
