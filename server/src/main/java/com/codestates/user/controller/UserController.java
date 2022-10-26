package com.codestates.user.controller;

//import com.codestates.user.dto.SingleResponseDto;
import com.codestates.user.dto.UserPostDto;
import com.codestates.user.dto.UserResponseDto;
import com.codestates.user.entity.User;
import com.codestates.user.mapper.UserMapper;
import com.codestates.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/users")
@Validated
@Slf4j
public class UserController {

    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto){

        User user = mapper.userPostToUser(userPostDto);
        User postUser = userService.createUser(user);

        return new ResponseEntity<>(mapper.useToUserResponseDto(postUser),HttpStatus.CREATED);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive long userId){

        User user = userService.findUser(userId);

        return new ResponseEntity<>((mapper.useToUserResponseDto(user)) ,HttpStatus.OK);
    }

//    사이드바 Users 구현시
//    @GetMapping
//    public ResponseEntity getUsers(@Positive @RequestParam int page,
//                                   @Positive @RequestParam int size){
//
//        Page<User> pageUsers = userService.findUsers(page -1,size);
//        List<User> users = pageUsers.get();
//
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.useToUserResponseDto(user)),HttpStatus.OK);
//    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") @Positive long userId){

        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

