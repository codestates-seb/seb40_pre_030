package com.codestates.answer.controller;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.mapper.AnswerMapper;
import com.codestates.answer.service.AnswerService;
import com.codestates.board.entity.Board;
import com.codestates.user.entity.User;
import com.codestates.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/answers")
@Validated
@Slf4j
public class AnswerController {
    private final AnswerService answerService;
    private final UserService userService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, UserService userService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.userService = userService;
        this.mapper = mapper;
    }

    // 답변 생성
    @PostMapping("/{board-id}")
    public ResponseEntity postAnswer(Principal principal,
                                     @PathVariable("board-id") @Positive long boardId,
                                     @Valid @RequestBody AnswerDto.Post requestBody){

        User user = userService.findVerifiedUserEmail(principal.getName());
        requestBody.setUser(user);
        requestBody.setBoardId(boardId);
        requestBody.setNickName(user.getNickName());
        requestBody.setPhotoURL(user.getPhotoURL());

        Answer answer = mapper.answerPostDtoToAnswer(requestBody);
        Board board = answerService.findVerifiedBoard(boardId);
        board.addAnswer(answer);

        Answer createAnswer = answerService.createAnswer(answer);
        AnswerDto.Response response = mapper.answerToAnswerResponse(createAnswer);
        response.setUserId(user.getUserId());
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // 답변 수정
    @PatchMapping("{post-id}/{answer-id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.Patch requestBody,
                                      Principal principal){
        User user = userService.findVerifiedUserEmail(principal.getName());
        long userId = user.getUserId();
        requestBody.setAnswerId(answerId);
        Answer answer = mapper.answerPatchDtoToAnswer(requestBody);
        Answer updateAnswer = answerService.updateAnswer(answer, userId);
        AnswerDto.Response response = mapper.answerToAnswerResponse(updateAnswer);
        response.setUserId(user.getUserId());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    // 답변 투표 +1
    @PatchMapping("/{board-id}/{answer-id}/voteUp")
    public ResponseEntity voteAnswerUp(@PathVariable("answer-id") @Positive long answerId){
        Answer votedAnswerUp = answerService.voteAnswerUp(answerId);
        AnswerDto.Response response = mapper.answerToAnswerResponse(votedAnswerUp);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 답변 투표 -1
    @PatchMapping("/{board-id}/{answer-id}/voteDown")
    public ResponseEntity voteAnswerDown(@PathVariable("answer-id") @Positive long answerId){
        Answer votedAnswerDown = answerService.voteAnswerDown(answerId);
        AnswerDto.Response response = mapper.answerToAnswerResponse(votedAnswerDown);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 답변 전체 조회
    @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size){
        Page<Answer> answers = answerService.findAnswers(page - 1, size);
        List<Answer> answerList = answers.getContent();
        List<AnswerDto.Response> response = mapper.answersToAnswerResponse(answerList);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 답변 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId,
                                       Principal principal){
        User user = userService.findVerifiedUserEmail(principal.getName());
        long userId = user.getUserId();
        answerService.deleteAnswer(answerId, userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}