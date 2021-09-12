package com.example.api_reconhecimentogestos.controller;

import com.example.api_reconhecimentogestos.dto.AtendimentoDTO;
import com.example.api_reconhecimentogestos.dto.CreateAtendimentoDTO;
import com.example.api_reconhecimentogestos.dto.CreateFuncionarioDTO;
import com.example.api_reconhecimentogestos.mapper.AtendimentoMapper;
import com.example.api_reconhecimentogestos.model.Atendimento;
import com.example.api_reconhecimentogestos.model.Funcionario;
import com.example.api_reconhecimentogestos.service.AtendimentoService;
import com.example.api_reconhecimentogestos.service.FuncionarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/attendance")
public class AtendimentoController {
    private final AtendimentoService atendimentoService;
    private final AtendimentoMapper atendimentoMapper;
    private final FuncionarioService funcionarioService;

    public AtendimentoController(AtendimentoService atendimentoService, AtendimentoMapper atendimentoMapper, FuncionarioService funcionarioService) {
        this.atendimentoService = atendimentoService;
        this.atendimentoMapper = atendimentoMapper;
        this.funcionarioService = funcionarioService;
    }

    @GetMapping
    public ResponseEntity<List<AtendimentoDTO>> findAll(){
        List<AtendimentoDTO> atendimentos = this.atendimentoService.findAll()
                .stream()
                .map(this.atendimentoMapper::convertToDto)
                .collect(Collectors.toList());
        return new ResponseEntity<>(atendimentos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AtendimentoDTO> findById(@PathVariable Long id){
        Atendimento atendimento = this.atendimentoService.findById(id);
        return new ResponseEntity<>(this.atendimentoMapper.convertToDto(atendimento), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AtendimentoDTO> create(@RequestBody CreateAtendimentoDTO dto){
        Atendimento atendimento = this.atendimentoService.create(this.atendimentoMapper.convertToEntity(dto));
        return new ResponseEntity<>(this.atendimentoMapper.convertToDto(atendimento), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AtendimentoDTO> update(@PathVariable Long id, @RequestBody AtendimentoDTO dto){
        Atendimento atendimento = this.atendimentoService.findById(id);
        Funcionario funcionario = this.funcionarioService.findById(dto.getFuncionarioId());
        atendimento.setData(dto.getData());
        atendimento.setAssunto(dto.getAssunto());
        atendimento.setDuracaoMinutos(dto.getDuracaoMinutos());
        atendimento.setFuncionario(funcionario);
        return new ResponseEntity<>(this.atendimentoMapper.convertToDto(this.atendimentoService.update(atendimento)), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Atendimento atendimento = this.atendimentoService.findById(id);
        this.atendimentoService.delete(atendimento);
        return new ResponseEntity<>("Deletado com sucesso", HttpStatus.OK);
    }
}
