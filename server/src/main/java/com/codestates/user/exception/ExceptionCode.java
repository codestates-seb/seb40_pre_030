package com.codestates.user.exception;

import lombok.Getter;

public enum ExceptionCode {

    USER_NOT_FOUND(404, "User not found "),
    USER_EXISTS(409, "User exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
