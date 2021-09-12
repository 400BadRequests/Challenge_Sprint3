package com.example.api_reconhecimentogestos.repository;

import com.example.api_reconhecimentogestos.model.Atendimento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AtendimentoRepository extends JpaRepository<Atendimento, Long> {
}
