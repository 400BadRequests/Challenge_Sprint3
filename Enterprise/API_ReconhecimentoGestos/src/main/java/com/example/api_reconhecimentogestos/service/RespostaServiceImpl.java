package com.example.api_reconhecimentogestos.service;

import com.example.api_reconhecimentogestos.model.Resposta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class RespostaServiceImpl extends BaseServiceImpl<Resposta, Long> implements RespostaService {
    public RespostaServiceImpl(JpaRepository<Resposta, Long> repository) {
        super(repository);
    }
}
