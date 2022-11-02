package com.codestates.auth.handler;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class SuccessUserInfo {

    private int httpStatus;
    private String email;
    private String photoURL;
}
