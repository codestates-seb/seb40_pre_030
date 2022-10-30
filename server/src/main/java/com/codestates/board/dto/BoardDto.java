package com.codestates.board.dto;


import com.codestates.answer.dto.AnswerDto;
import com.codestates.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class BoardDto {

    @Getter @Setter
    public static class Post {

        private User user;

        private String photoURL;

        @NotBlank
        private String title;

        @NotBlank
        private String body;
    }

    @Getter @Setter
    public static class Patch {

        private long boardId;

        @NotBlank
        private String title;

        @NotBlank
        private String body;

        private String photoURL;
    }

    @Getter @Setter
    @NoArgsConstructor
    public static class Response {
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String title;
        private String body;
        private String nickName;
        private String photoURL;
        private int voteCount;
        private List<AnswerDto.Response> answer;
    }
}
