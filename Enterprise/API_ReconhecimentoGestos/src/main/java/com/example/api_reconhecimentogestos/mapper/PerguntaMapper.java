package com.example.api_reconhecimentogestos.mapper;

import com.example.api_reconhecimentogestos.dto.CreatePerguntaDTO;
import com.example.api_reconhecimentogestos.dto.PerguntaDTO;
import com.example.api_reconhecimentogestos.model.Atendimento;
import com.example.api_reconhecimentogestos.model.Pergunta;
import com.example.api_reconhecimentogestos.service.AtendimentoService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class PerguntaMapper {
    private final ModelMapper modelMapper;
    private final AtendimentoService atendimentoService;

    public PerguntaMapper(ModelMapper modelMapper, AtendimentoService atendimentoService) {
        this.modelMapper = modelMapper;
        this.atendimentoService = atendimentoService;
    }

    public Pergunta convertToEntity(CreatePerguntaDTO dto){
        Atendimento atendimento  = atendimentoService.findById(dto.getIdAtendimento());
        Pergunta pergunta = new Pergunta();
        pergunta.setImg_pergunta(dto.getImg_pergunta());
        pergunta.setAtendimento(atendimento);
        return pergunta;
    }

    public PerguntaDTO convertToDto(Pergunta entity){
        PerguntaDTO dto = new PerguntaDTO();
        dto.setId(entity.getId());
        dto.setImg_pergunta(entity.getImg_pergunta());
        dto.setIdAtendimento(entity.getAtendimento().getId());
        return dto;
    }
}
