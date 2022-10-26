package com.codestates.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class AnswerPostDto {
    // @Pattern(regexp = "/^.{15,}$/", message = "15자 이상 작성해야합니다.")
    @NotBlank(message = "답변을 작성해주세요.")
    private String answerBody;

    //@Positive
    //private long userId;
    //@Positive
    //private long boardId;
}
