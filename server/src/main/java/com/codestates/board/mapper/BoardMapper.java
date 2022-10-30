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

    default BoardDto.Response boardToBoardResponse(Board board) {

        BoardDto.Response boardResponse = new BoardDto.Response();
        boardResponse.setCreatedAt(board.getCreatedAt());
        boardResponse.setModifiedAt(board.getModifiedAt());
        boardResponse.setTitle(board.getTitle());
        boardResponse.setBody(board.getBody());
        boardResponse.setNickName(board.getNickName());
        boardResponse.setPhotoURL(board.getPhotoURL());
        boardResponse.setVoteCount(board.getVoteCount());

        List<Answer> answers = board.getAnswer();
        boardResponse.setAnswer(answersToAnswerResponse(answers));

        return boardResponse;
    }

    default List<AnswerDto.Response> answersToAnswerResponse(List<Answer> answers) {

        return answers
                .stream()
                .map(answer -> AnswerDto.Response
                        .builder()
                        .answerId(answer.getAnswerId())
                        .answerBody(answer.getAnswerBody())
                        .modifiedAt(answer.getModifiedAt())
                        .build())
                .collect(Collectors.toList());
    }
}
