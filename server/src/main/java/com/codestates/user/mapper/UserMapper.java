package com.codestates.user.mapper;

import com.codestates.answer.entity.Answer;
import com.codestates.board.dto.BoardDto;
import com.codestates.board.entity.Board;
import com.codestates.user.dto.UserDto;
import com.codestates.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User userPostDtoToUser(UserDto.Post requestBody);
    UserDto.Response userToUserResponse(User user);
//    List<UserDto.Response> usersToUserResponse(List<User> users);

    default UserDto.Response userToUserResponseGet(User requestBody) {

        if ( requestBody == null ) {
            return null;
        }

        UserDto.Response userResponse = new UserDto.Response();
        userResponse.setUserId(requestBody.getUserId());
        userResponse.setNickName(requestBody.getNickName());
        userResponse.setEmail(requestBody.getEmail());
        userResponse.setPhotoURL(requestBody.getPhotoURL());
        userResponse.setCreatedAt(requestBody.getCreatedAt());

        return userResponse;
    }
}
