package com.codestates.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class UserDto {
    @Getter
    @Setter
    public static class Post{
        @Email
        @NotBlank(message = "이메일을 입력해 주세요.")
        private String email;

        @NotBlank(message = "이름을 입력해 주세요.")
        private String nickName;

        @NotBlank(message = "비밀번호를 입력해 주세요.")
        private String password;

        @URL
        private String photoURL;
    }

    @Getter
    @Builder
    public static class Response{
        private long userId;
        private String email;
        private String nickName;
        private String password;
        private String photoURL;
        private LocalDateTime createdAt;

        /*
    private User.UserStatus userStatus;

    public String getUserStatus(){
        return userStatus.getStatus();
    }
*/
    }
}
