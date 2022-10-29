package com.codestates.answer.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {
    @Getter
    @Setter
    public static class Post{
        @NotBlank(message = "답변을 작성해주세요.")
        private String answerBody;
        private String photoURL;
        private long boardId;

        //@Positive
        //private long userId;
        //@Positive
        //private long boardId;
    }
    @Getter
    public static class Patch{
        @Setter
        private long answerId;

        @NotBlank(message = "답변을 작성해주세요.")
        private String answerBody;

        @URL
        private String photoURL;
    }
    @Getter
    @Builder
    public static class Response{
        private long answerId;
        private String answerBody;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String photoURL;
        private String nickName;
        private int voteCount;
        //private long  boardId;
    }
}