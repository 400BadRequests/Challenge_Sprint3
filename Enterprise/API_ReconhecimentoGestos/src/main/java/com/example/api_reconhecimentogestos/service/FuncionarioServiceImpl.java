package com.example.api_reconhecimentogestos.service;

import com.example.api_reconhecimentogestos.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class FuncionarioServiceImpl extends BaseServiceImpl<Funcionario, Long> implements FuncionarioService {
    public FuncionarioServiceImpl(JpaRepository<Funcionario, Long> repository) {
        super(repository);
    }
}
