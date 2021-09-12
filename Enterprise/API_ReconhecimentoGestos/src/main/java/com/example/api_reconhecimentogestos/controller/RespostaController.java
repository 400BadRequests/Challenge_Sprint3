package com.example.api_reconhecimentogestos.controller;

import com.example.api_reconhecimentogestos.dto.CreateRespostaDTO;
import com.example.api_reconhecimentogestos.dto.RespostaDTO;
import com.example.api_reconhecimentogestos.mapper.RespostaMapper;
import com.example.api_reconhecimentogestos.model.Atendimento;
import com.example.api_reconhecimentogestos.model.Pergunta;
import com.example.api_reconhecimentogestos.model.Resposta;
import com.example.api_reconhecimentogestos.service.PerguntaService;
import com.example.api_reconhecimentogestos.service.RespostaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/answer")
public class RespostaController {

    private final RespostaService respostaService;
    private final RespostaMapper respostaMapper;
    private final PerguntaService perguntaService;

    public RespostaController(RespostaService respostaService, RespostaMapper respostaMapper, PerguntaService perguntaService) {
        this.respostaService = respostaService;
        this.respostaMapper = respostaMapper;
        this.perguntaService = perguntaService;
    }

    @GetMapping
    public ResponseEntity<List<RespostaDTO>> findAll(){
        List<RespostaDTO> respostas = this.respostaService.findAll()
                .stream()
                .map(this.respostaMapper::convertToDto) //Mapeando os itens para um DTO
                .collect(Collectors.toList()); //Coleta tudo como uma lista

        return new ResponseEntity<>(respostas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RespostaDTO> findById(@PathVariable Long id){
        Resposta resposta = this.respostaService.findById(id);
        return new ResponseEntity<>(this.respostaMapper.convertToDto(resposta), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<RespostaDTO> create(@RequestBody CreateRespostaDTO dto){
        Resposta resposta = this.respostaService.create(this.respostaMapper.convertToEntity(dto));
        return new ResponseEntity<>(this.respostaMapper.convertToDto(resposta), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RespostaDTO> update(@PathVariable Long id, @RequestBody RespostaDTO dto){
        Resposta resposta = this.respostaService.findById(id); //Busca o cara no banco
        Pergunta pergunta = this.perguntaService.findById(dto.getIdPergunta());
        resposta.setTexto(dto.getTexto());
        resposta.setPergunta(pergunta);
        return new ResponseEntity<>(this.respostaMapper.convertToDto(this.respostaService.update(resposta)), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Resposta resposta = this.respostaService.findById(id);
        this.respostaService.delete(resposta);
        return new ResponseEntity<>("Resource removed", HttpStatus.OK);
    }


}
