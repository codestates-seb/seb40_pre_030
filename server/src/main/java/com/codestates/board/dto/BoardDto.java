package com.codestates.board.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

public class BoardDto {

    @Getter
    public static class Post {

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

        private String title;
        private String body;
    }
}
