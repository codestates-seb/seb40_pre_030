package com.codestates.answer.dto;

import com.codestates.user.entity.User;
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

        private User user;

        @NotBlank(message = "답변을 작성해주세요.")
        private String answerBody;

        private long boardId;

        private String nickName;
    }
    @Getter
    public static class Patch{

        @Setter
        private long answerId;

        @NotBlank(message = "답변을 작성해주세요.")
        private String answerBody;
    }

    @Getter
    @Builder
    public static class Response{
        private long answerId;
        private String answerBody;
        private String nickName;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private int voteCount;
    }
}