package com.codestates.board.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class BoardDto {

    @Getter
    public static class Post {

        private String photoURL;

        @NotBlank
        private String title;

        @NotBlank
        private String body;
    }

    @Getter @Setter
    public static class Patch {

        private long boardId;
        private String title;
        private String body;
    }

    @Getter
    @Builder
    public static class Response {
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String title;
        private String body;
        private String nickName;
        private String photoURL;
        private int voteCount;
        private long totalCount;
    }
}
