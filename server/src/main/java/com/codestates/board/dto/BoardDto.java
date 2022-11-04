package com.codestates.board.dto;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;

public class BoardDto {

    @Getter @Setter
    public static class Post {

        private User user;

        @NotBlank(message = "제목을 작성해주세요.")
        private String title;

        @NotBlank(message = "내용을 작성해주세요.")
        private String body;

        private String nickName;

        private String photoURL;
    }

    @Getter @Setter
    public static class Patch {

        private long boardId;


        private String title;

        @NotBlank(message = "내용을 작성해주세요.")
        private String body;
    }

    @Getter @Setter
    @NoArgsConstructor
    public static class Response {
        private Long boardId;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String title;
        private String body;
        private Long userId;
        private String nickName;
        private String photoURL;
        private int voteCount;
        private List<AnswerDto.Response> answer;
    }

    @Getter
    public static class BoardVote{
        private int voteCount;
    }
}
