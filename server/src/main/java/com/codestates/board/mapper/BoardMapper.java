package com.codestates.board.mapper;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.board.dto.BoardDto;
import com.codestates.board.entity.Board;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPostDtoToBoard(BoardDto.Post requestBody);
    Board boardPatchDtoToBoard(BoardDto.Patch requestBody);
//    BoardDto.Response boardToBoardResponse(Board board);
    List<BoardDto.Response> boardsToBoardResponse(List<Board> boards);

    default BoardDto.Response boardToBoardResponse(Board requestBody) {

        if ( requestBody == null ) {
            return null;
        }

        BoardDto.Response boardResponse = new BoardDto.Response();
        boardResponse.setTitle(requestBody.getTitle());
        boardResponse.setBody(requestBody.getBody());
        boardResponse.setNickName(requestBody.getUser().getNickName());
        boardResponse.setCreatedAt(requestBody.getCreatedAt());
        boardResponse.setModifiedAt(requestBody.getModifiedAt());
        boardResponse.setPhotoURL(requestBody.getPhotoURL());
        boardResponse.setVoteCount(requestBody.getVoteCount());

        List<Answer> answers = requestBody.getAnswer();
        boardResponse.setAnswer(answersToAnswerResponse(answers));

        return boardResponse;
    }

    default List<AnswerDto.Response> answersToAnswerResponse(List<Answer> answers) {

        if ( answers == null ) {
            return null;
        }

        return answers
                .stream()
                .map(answer -> AnswerDto.Response
                        .builder()
                        .answerId(answer.getAnswerId())
                        .answerBody(answer.getAnswerBody())
                        .nickName(answer.getUser().getNickName())
                        .createdAt(answer.getCreatedAt())
                        .modifiedAt(answer.getModifiedAt())
                        .voteCount(answer.getVoteCount())
                        .photoURL(answer.getPhotoURL())
                        .build())
                .collect(Collectors.toList());
    }
}
