package com.codestates.user.exception;

import lombok.Getter;

public class BusinessLoginException extends RuntimeException{
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLoginException(ExceptionCode exceptionCode){
        this.exceptionCode = exceptionCode;
    }
}
