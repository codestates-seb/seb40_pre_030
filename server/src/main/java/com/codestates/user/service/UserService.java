package com.codestates.user.service;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.user.entity.User;
import com.codestates.user.repository.UserRepository;
//import com.codestates.user.exception.BusinessLoginException;
//import com.codestates.user.exception.ExceptionCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    // 회원 생성
    public User createUser(User user){
        verifyExistsEmail(user.getEmail());
        return userRepository.save(user);
    }

//    public User updateUser(User user){
//
//        return userRepository.save(user);
//    }

    //회원 조회
    @Transactional(readOnly = true)
    public User findUser(long userId){

        return findVerifiedUser(userId);
    }
//    사이드 바 유저 버튼 활성시
//    public Page<User> findUsers(int page, int size) {
//        return userRepository.findAll(PageRequest.of(page, size,
//                Sort.by("userId").descending()));
//    }

    // 회원 삭제
    public void deleteUser(long userId){

        User findUser = findVerifiedUser(userId);

        userRepository.delete(findUser);

    }

    @Transactional(readOnly = true)
    public User findVerifiedUser(long userId){

        Optional<User> optionalUser =
                userRepository.findById(userId);

        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    @Transactional(readOnly = true)
    private void verifyExistsEmail(String email){
        Optional<User> user =  userRepository.findByEmail(email);

        if(user.isPresent())
            throw new IllegalStateException("중복된 Email 입니다.");
        }
    }
