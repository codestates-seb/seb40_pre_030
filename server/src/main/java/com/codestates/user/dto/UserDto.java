package com.codestates.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
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
        @Pattern(regexp="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,20}",
                message = "비밀번호는 영문과 숫자, 특수기호를 적어도 1개 이상씩 포함하여 8자 ~ 20자여야 합니다.")
        private String password;

        @URL
        private String photoURL;
    }

    @Getter @Setter
    @NoArgsConstructor
    public static class Response{
        private long userId;
        private String email;
        private String nickName;
        private String photoURL;
        private LocalDateTime createdAt;
    }
}
