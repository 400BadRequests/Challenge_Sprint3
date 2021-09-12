package com.example.api_reconhecimentogestos.controller;

import com.example.api_reconhecimentogestos.dto.CreatePerguntaDTO;
import com.example.api_reconhecimentogestos.dto.PerguntaDTO;
import com.example.api_reconhecimentogestos.mapper.PerguntaMapper;
import com.example.api_reconhecimentogestos.model.Atendimento;
import com.example.api_reconhecimentogestos.model.Pergunta;
import com.example.api_reconhecimentogestos.service.AtendimentoService;
import com.example.api_reconhecimentogestos.service.PerguntaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/question")
public class PerguntaController {

    private final PerguntaService perguntaService;
    private final PerguntaMapper perguntaMapper;
    private final AtendimentoService atendimentoService;

    public PerguntaController(PerguntaService perguntaService, PerguntaMapper perguntaMapper, AtendimentoService atendimentoService) {
        this.perguntaService = perguntaService;
        this.perguntaMapper = perguntaMapper;
        this.atendimentoService = atendimentoService;
    }

    @GetMapping
    public ResponseEntity<List<PerguntaDTO>> findAll(){
        List<PerguntaDTO> perguntas = this.perguntaService.findAll()
                .stream()
                .map(this.perguntaMapper::convertToDto)
                .collect(Collectors.toList());
        return new ResponseEntity<>(perguntas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PerguntaDTO> findById(@PathVariable Long id){
        Pergunta pergunta = this.perguntaService.findById(id);
        return new ResponseEntity<>(this.perguntaMapper.convertToDto(pergunta), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PerguntaDTO> create(@RequestBody CreatePerguntaDTO dto){
        Pergunta pergunta = this.perguntaService.create(this.perguntaMapper.convertToEntity(dto));
        return new ResponseEntity<>(this.perguntaMapper.convertToDto(pergunta), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PerguntaDTO> update(@PathVariable Long id, @RequestBody PerguntaDTO dto){
        Pergunta pergunta = this.perguntaService.findById(id); //Busca o cara no banco
        Atendimento atendimento = this.atendimentoService.findById(dto.getIdAtendimento());
        pergunta.setImg_pergunta(dto.getImg_pergunta());
        pergunta.setAtendimento(atendimento);
        return new ResponseEntity<>(this.perguntaMapper.convertToDto(this.perguntaService.update(pergunta)), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Pergunta pergunta = this.perguntaService.findById(id);
        this.perguntaService.delete(pergunta);
        return new ResponseEntity<>("Resource removed", HttpStatus.OK);
    }
}
