package com.example.api_reconhecimentogestos.mapper;

import com.example.api_reconhecimentogestos.dto.CreateRespostaDTO;
import com.example.api_reconhecimentogestos.dto.RespostaDTO;
import com.example.api_reconhecimentogestos.model.Pergunta;
import com.example.api_reconhecimentogestos.model.Resposta;
import com.example.api_reconhecimentogestos.service.PerguntaService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class RespostaMapper {
    private final ModelMapper modelMapper;
    private final PerguntaService perguntaService;

    public RespostaMapper(ModelMapper modelMapper, PerguntaService perguntaService) {
        this.modelMapper = modelMapper;
        this.perguntaService = perguntaService;
    }

    public RespostaDTO convertToDto(Resposta entity){
        RespostaDTO dto = new RespostaDTO();
        dto.setId(entity.getId());
        dto.setTexto(entity.getTexto());
        dto.setIdPergunta(entity.getPergunta().getId());
        return dto;
    }

    public Resposta convertToEntity(CreateRespostaDTO dto){
        Pergunta perguntaFound = perguntaService.findById(dto.getIdPergunta());
        Resposta entity = new Resposta();
        entity.setTexto(dto.getTexto());
        entity.setPergunta(perguntaFound);
        return entity;
    }
}
