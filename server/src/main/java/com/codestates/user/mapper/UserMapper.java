package com.codestates.user.mapper;

import com.codestates.user.dto.UserPostDto;
import com.codestates.user.dto.UserResponseDto;
import com.codestates.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User userPostToUser(UserPostDto userPostDto);
//    User userPatchToUser(UserPatchDto userPatchDto);
    UserResponseDto useToUserResponseDto (User user);
    List<UserResponseDto> usersToUserResponseDtos(List<User> users);
}
