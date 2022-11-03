package com.codestates.exception;

import lombok.Getter;

public enum ExceptionCode {
    ANSWER_NOT_FOUND(404, "Answer Not Found"),
    BOARD_NOT_FOUND(404, "Board Not Found"),
    USER_NOT_FOUND(404, "User Not Found"),
    USER_EXISTS(409, "User Exists"),
    PERMISSION_DENIED(401, "Permission Denied");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}