package com.codestates.user.mapper;

import com.codestates.user.dto.UserDto;
//import com.codestates.user.dto.UserPostDto;
import com.codestates.user.dto.UserResponseDto;
import com.codestates.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User userPostDtoToUser(UserDto.Post requestBody);
    UserDto.Response userToUserResponse(User user);
    List<UserDto.Response> usersToUserResponse(List<User> users);
}
