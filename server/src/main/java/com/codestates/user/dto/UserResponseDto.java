package com.codestates.user.dto;

import com.codestates.user.entity.User;
import com.codestates.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;


@Getter
@Builder
public class UserResponseDto {

    private long userId;
    private String email;
    private String name;
    private String password;
    private User.UserStatus userStatus;

    public String getUserStatus(){
        return userStatus.getStatus();
    }
}
