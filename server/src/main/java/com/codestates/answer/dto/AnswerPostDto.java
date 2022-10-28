package com.codestates.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@Setter
public class AnswerPostDto {
    // @Pattern(regexp = "/^.{15,}$/", message = "15자 이상 작성해야합니다.")
    @NotBlank(message = "답변을 작성해주세요.")
    private String answerBody;
    private String photoURL;
    private long boardId;

    //@Positive
    //private long userId;
    //@Positive
    //private long boardId;
}
