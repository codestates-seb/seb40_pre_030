package com.codestates.board.controller;

import com.codestates.board.dto.BoardDto;
import com.codestates.board.entity.Board;
import com.codestates.board.mapper.BoardMapper;
import com.codestates.board.service.BoardService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
public class BoardController {

    private final BoardService boardService;
    private final BoardMapper mapper;

    public BoardController(BoardService boardService, BoardMapper mapper) {
        this.boardService = boardService;
        this.mapper = mapper;
    }

    // 질문 생성
    @PostMapping("/ask")
    public ResponseEntity postBoard(@Valid @RequestBody BoardDto.Post requestBody) {

        Board board = mapper.boardPostDtoToBoard(requestBody);
        Board createBoard = boardService.createBoard(board);
        BoardDto.Response response = mapper.boardToBoardResponse(createBoard);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // 질문 수정
    @PatchMapping("/{post_id}/edit")
    public ResponseEntity patchBoard(@PathVariable("post_id") @Positive long postId,
                                     @Valid @RequestBody BoardDto.Patch requestBody) {

        requestBody.setBoardId(postId);
        Board board = mapper.boardPatchDtoToBoard(requestBody);
        Board updateBoard = boardService.updateBoard(board);
        BoardDto.Response response = mapper.boardToBoardResponse(updateBoard);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 특정 질문 출력
    @GetMapping("/{post-id}")
    public ResponseEntity getBoard(@PathVariable("post-id") @Positive long postId) {

        Board response = boardService.findPost(postId);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 질문 전체 목록 출력
    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {

        Page<Board> boards = boardService.findPosts(page - 1, size);
        List<Board> boardList = boards.getContent();
        List<BoardDto.Response> responses = mapper.boardsToBoardResponse(boardList);

        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    // 질문 삭제
    @DeleteMapping("{post_id}")
    public ResponseEntity deleteBoard(@PathVariable("post_id") long postId) {

        boardService.deleteBoard(postId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
