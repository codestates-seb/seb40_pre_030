package com.codestates.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
public class AnswerPatchDto {
    @Setter
    private long answerId;
    @NotBlank(message = "답변을 작성해주세요.")
    private String answerBody;
}
