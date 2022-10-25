package com.codestates.user.dto;

import com.codestates.user.entity.User;
import lombok.Builder;
import lombok.Getter;


@Getter
public class UserResponseDto {

    private long userId;
    private String email;
    private String name;
    private String password;
    private User.UserStatus userStatus;

    public UserResponseDto(User.UserStatus userStatus) {
        this.userStatus = userStatus;
    }
}
