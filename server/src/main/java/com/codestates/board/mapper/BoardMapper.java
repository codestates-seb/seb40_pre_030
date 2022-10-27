package com.codestates.board.mapper;

import com.codestates.board.dto.BoardDto;
import com.codestates.board.entity.Board;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPostDtoToBoard(BoardDto.Post requestBody);
    Board boardPatchDtoToBoard(BoardDto.Patch requestBody);
    BoardDto.Response boardToBoardResponse(Board board);
    List<BoardDto.Response> boardsToBoardResponse(List<Board> boards);
}
