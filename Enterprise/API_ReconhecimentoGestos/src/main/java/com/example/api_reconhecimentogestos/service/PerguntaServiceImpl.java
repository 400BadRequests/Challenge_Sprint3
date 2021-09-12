package com.example.api_reconhecimentogestos.service;

import com.example.api_reconhecimentogestos.model.Pergunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class PerguntaServiceImpl extends BaseServiceImpl<Pergunta, Long> implements PerguntaService {
    public PerguntaServiceImpl(JpaRepository<Pergunta, Long> repository) {
        super(repository);
    }
}
