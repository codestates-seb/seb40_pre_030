package com.codestates.auth.handler;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.user.entity.User;
import com.codestates.user.repository.UserRepository;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private UserRepository userRepository;

    public UserAuthenticationSuccessHandler(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        log.info("# Authenticated successfully!");

        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        SuccessUserInfo successUserInfo = new SuccessUserInfo(HttpStatus.ACCEPTED.value(), user.getUserId(), user.getEmail(), user.getNickName(), user.getPhotoURL());
        String responseInfo = new Gson().toJson(successUserInfo);

        response.setCharacterEncoding("utf-8");
        response.setStatus(HttpStatus.ACCEPTED.value());
        response.getWriter().write(responseInfo);
    }
}
