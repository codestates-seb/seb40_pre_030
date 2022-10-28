package com.codestates.exception;

import lombok.Getter;

public enum ExceptionCode {
    ANSWER_NOT_FOUND(404, "Answer Not Found"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    USER_NOT_FOUND(404, "User not found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}