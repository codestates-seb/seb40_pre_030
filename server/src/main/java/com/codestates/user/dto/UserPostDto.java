package com.codestates.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class UserPostDto {

    @Email
    @NotBlank
    private String email;

    @NotBlank(message = "이름은 공백이 아니어야 합니다")
    private String name;

    @NotBlank(message = "비밀번호는 공백이 아니어야 합니다")
    private String password;

}
