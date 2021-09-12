package com.example.api_reconhecimentogestos.repository;

import com.example.api_reconhecimentogestos.model.Pergunta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerguntaRepository extends JpaRepository<Pergunta, Long> {
}
