package com.example.api_reconhecimentogestos.service;

import com.example.api_reconhecimentogestos.model.Atendimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class AtendimentoServiceImpl extends BaseServiceImpl<Atendimento, Long> implements AtendimentoService {
    public AtendimentoServiceImpl(JpaRepository<Atendimento, Long> repository) {
        super(repository);
    }

}
