package com.codestates.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private String answerBody;
    //private long  boardId;
}
