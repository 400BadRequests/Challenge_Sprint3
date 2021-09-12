package com.example.api_reconhecimentogestos.controller;

import com.example.api_reconhecimentogestos.dto.CreateFuncionarioDTO;
import com.example.api_reconhecimentogestos.dto.FuncionarioDTO;
import com.example.api_reconhecimentogestos.mapper.FuncionarioMapper;
import com.example.api_reconhecimentogestos.model.Funcionario;
import com.example.api_reconhecimentogestos.service.FuncionarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
public class FuncionarioController {
    private final FuncionarioService funcionarioService;
    private final FuncionarioMapper funcionarioMapper;

    public FuncionarioController(FuncionarioService funcionarioService, FuncionarioMapper funcionarioMapper) {
        this.funcionarioService = funcionarioService;
        this.funcionarioMapper = funcionarioMapper;
    }

    @GetMapping
    public ResponseEntity<List<FuncionarioDTO>> findAll(){
        List<FuncionarioDTO> funcionarios = this.funcionarioService.findAll()
                .stream()
                .map(this.funcionarioMapper::convertToDto)
                .collect(Collectors.toList());
        return new ResponseEntity<>(funcionarios, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FuncionarioDTO> findById(@PathVariable Long id){
        Funcionario funcionario = this.funcionarioService.findById(id);
        return new ResponseEntity<>(this.funcionarioMapper.convertToDto(funcionario), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<FuncionarioDTO> create(@RequestBody CreateFuncionarioDTO dto){
        Funcionario funcionarioCreated =this.funcionarioService.create(this.funcionarioMapper.convertToEntity(dto));
        return new ResponseEntity<>(this.funcionarioMapper.convertToDto(funcionarioCreated), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FuncionarioDTO> update(@PathVariable Long id, @RequestBody FuncionarioDTO dto){
        Funcionario funcionario = this.funcionarioService.findById(id);
        funcionario.setNumeroTelefone(dto.getNumeroTelefone());
        funcionario.setSenha(dto.getSenha());
        funcionario.setNomeCompleto(dto.getNomeCompleto());
        funcionario.setDataCadastro(dto.getDataCadastro());
        funcionario.setEmail(dto.getEmail());
        return new ResponseEntity<>(this.funcionarioMapper.convertToDto(this.funcionarioService.update(funcionario)), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Funcionario funcionario = this.funcionarioService.findById(id);
        this.funcionarioService.delete(funcionario);
        return new ResponseEntity<>("Deletado com sucesso", HttpStatus.ACCEPTED);
    }

}
