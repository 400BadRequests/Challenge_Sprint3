package com.example.api_reconhecimentogestos.mapper;

import com.example.api_reconhecimentogestos.dto.CreateFuncionarioDTO;
import com.example.api_reconhecimentogestos.dto.FuncionarioDTO;
import com.example.api_reconhecimentogestos.model.Funcionario;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class FuncionarioMapper {

    private final ModelMapper modelMapper;

    public FuncionarioMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public Funcionario convertToEntity(CreateFuncionarioDTO dto){
        return this.modelMapper
                .typeMap(CreateFuncionarioDTO.class, Funcionario.class)
                .map(dto);
    }

    public FuncionarioDTO convertToDto(Funcionario entity){
        return this.modelMapper
                .typeMap(Funcionario.class, FuncionarioDTO.class)
                .map(entity);
    }
}
