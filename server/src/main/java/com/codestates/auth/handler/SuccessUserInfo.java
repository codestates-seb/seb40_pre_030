package com.codestates.auth.handler;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class SuccessUserInfo {

    private int httpStatus;
    private long userId;
    private String email;
    private String nickName;
    private String photoURL;
}
