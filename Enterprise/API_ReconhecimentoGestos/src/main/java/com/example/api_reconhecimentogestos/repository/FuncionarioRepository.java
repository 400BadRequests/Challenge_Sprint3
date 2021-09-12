package com.example.api_reconhecimentogestos.repository;

import com.example.api_reconhecimentogestos.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {
}
