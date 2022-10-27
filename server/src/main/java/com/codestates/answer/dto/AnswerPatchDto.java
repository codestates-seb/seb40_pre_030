package com.codestates.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
public class AnswerPatchDto {
    @Setter
    private long answerId;
    private String answerBody;
}
