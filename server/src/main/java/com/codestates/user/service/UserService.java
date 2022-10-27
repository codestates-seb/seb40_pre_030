package com.codestates.user.service;

import com.codestates.auth.utils.CustomAuthorityUtils;
import com.codestates.user.entity.User;
import com.codestates.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public User createUser(User user){
        verifyExistsEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        return userRepository.save(user);
    }

//    public User updateUser(User user){
//
//        return userRepository.save(user);
//    }

    public User findUser(long userId){

        return findVerifiedUser(userId);
    }
//    사이드 바 유저 버튼 활성시
//    public Page<User> findUsers(int page, int size) {
//        return userRepository.findAll(PageRequest.of(page, size,
//                Sort.by("userId").descending()));
//    }


    public void deleteUser(long userId){

        User findUser = findVerifiedUser(userId);

        userRepository.delete(findUser);

    }

    public User findVerifiedUser(long userId){

        Optional<User> optionalUser =
                userRepository.findById(userId);

        User findUser =
                optionalUser.orElseThrow(() ->
                        new IllegalStateException("존재하지 않는 ID 입니다. "));

        return findUser;
    }

    private void verifyExistsEmail(String email){
        Optional<User> user =  userRepository.findByEmail(email);

        if(user.isPresent())
            throw new IllegalStateException("중복된 Email 입니다.");
        }
    }
