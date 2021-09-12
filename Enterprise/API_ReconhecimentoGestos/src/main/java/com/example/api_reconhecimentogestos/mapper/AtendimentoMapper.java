package com.example.api_reconhecimentogestos.mapper;

import com.example.api_reconhecimentogestos.dto.AtendimentoDTO;
import com.example.api_reconhecimentogestos.dto.CreateAtendimentoDTO;
import com.example.api_reconhecimentogestos.model.Atendimento;
import com.example.api_reconhecimentogestos.model.Funcionario;
import com.example.api_reconhecimentogestos.service.AtendimentoService;
import com.example.api_reconhecimentogestos.service.FuncionarioService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class AtendimentoMapper {
    private final ModelMapper modelMapper;
    private final FuncionarioService funcionarioService;

    public AtendimentoMapper(ModelMapper modelMapper, FuncionarioService service) {
        this.modelMapper = modelMapper;
        this.funcionarioService = service;
    }

    public Atendimento convertToEntity(CreateAtendimentoDTO dto){
        Atendimento atendimento = new Atendimento();
        Funcionario funcionario = funcionarioService.findById(dto.getFuncionarioId());
        atendimento.setDuracaoMinutos(dto.getDuracaoMinutos());
        atendimento.setAssunto(dto.getAssunto());
        atendimento.setData(dto.getData());
        atendimento.setFuncionario(funcionario);
        return atendimento;
    }

    public AtendimentoDTO convertToDto(Atendimento entity){
        return this.modelMapper
                .typeMap(Atendimento.class, AtendimentoDTO.class)
                .addMapping(Atendimento::getFuncionarioId, AtendimentoDTO::setFuncionarioId)
                .map(entity);
    }

}
