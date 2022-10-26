package com.codestates.answer.controller;

import com.codestates.answer.dto.AnswerPatchDto;
import com.codestates.answer.dto.AnswerPostDto;
import com.codestates.answer.dto.AnswerResponseDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.mapper.AnswerMapper;
import com.codestates.answer.service.AnswerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/answers")
@Validated
@Slf4j
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper){
        this.answerService = answerService;
        this.mapper = mapper;
    }

    // 답변 생성
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){
        Answer answer = mapper.answerPostDtoToAnswer(answerPostDto);
        Answer response = answerService.createAnswer(answer);
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.CREATED);
    }
    // 답변 수정
    @PatchMapping("/{answer-id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto){
        answerPatchDto.setAnswerId(answerId);
        Answer response = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }
    /**
    // 답변 조회
    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") @Positive long answerId){
        Answer answer = answerService.findAnswer(answerId);
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(answer), HttpStatus.OK);
    }
    **/

    // 답변 전체 조회
    @GetMapping
    public ResponseEntity getAnswers(){
        List<Answer> answers = answerService.findAnswers();
        List<AnswerResponseDto> response =
                answers.stream()
                        .map(answer -> mapper.answerToAnswerResponseDto(answer))
                        .collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    // 답변 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId){

        answerService.deleteAnswer(answerId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
