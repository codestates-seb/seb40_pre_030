package com.codestates.board.controller;

import com.codestates.board.dto.BoardDto;
import com.codestates.board.entity.Board;
import com.codestates.board.mapper.BoardMapper;
import com.codestates.board.service.BoardService;
import com.codestates.user.entity.User;
import com.codestates.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.codestates.dto.MultiResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;

@RestController
public class BoardController {

    private final BoardService boardService;
    private final UserService userService;
    private final BoardMapper mapper;

    public BoardController(BoardService boardService, UserService userService, BoardMapper mapper) {
        this.boardService = boardService;
        this.userService = userService;
        this.mapper = mapper;
    }

    // 질문 생성
    @PostMapping("/ask")
    public ResponseEntity postBoard(Principal principal,
                                    @Valid @RequestBody BoardDto.Post requestBody) {

        User user = userService.findVerifiedUserEmail(principal.getName());
        requestBody.setUser(user);
        requestBody.setNickName(user.getNickName());
        requestBody.setPhotoURL(user.getPhotoURL());
        Board board = mapper.boardPostDtoToBoard(requestBody);
        Board createBoard = boardService.createBoard(board);
        BoardDto.Response response = mapper.boardToBoardResponse(createBoard);
        response.setBoardId(board.getBoardId());
        response.setUserId(user.getUserId());
        response.setPhotoURL(user.getPhotoURL());

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

    // 질문 투표 +1
    @PatchMapping("/{board_id}/voteUp")
    public ResponseEntity voteBoardUp(@PathVariable("board_id") @Positive long boardId){
        Board votedBoardUp = boardService.voteBoardUp(boardId);
        BoardDto.Response response = mapper.boardToBoardResponse(votedBoardUp);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 질문 투표 -1
    @PatchMapping("/{board_id}/voteDown")
    public ResponseEntity voteBoardDown(@PathVariable("board_id") @Positive long boardId){
        Board votedBoardDown = boardService.voteBoardDown(boardId);
        BoardDto.Response response = mapper.boardToBoardResponse(votedBoardDown);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 질문 상세 페이지
    @GetMapping("/{post-id}")
    public ResponseEntity getBoard(@PathVariable("post-id") @Positive long postId) {

        Board board = boardService.findPost(postId);
        User user = userService.findUser(board.getUser().getUserId());
        board.setUser(user);
        BoardDto.Response response = mapper.boardToBoardResponse(board);
        response.setBoardId(board.getBoardId());
        response.setUserId(user.getUserId());
        response.setPhotoURL(user.getPhotoURL());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 질문 전체 목록 조회
    @GetMapping
    public ResponseEntity<MultiResponseDto<BoardDto.Response>> getBoards(@Positive @RequestParam int page,
                                                                         @Positive @RequestParam int size) {

        Page<Board> boards = boardService.findPosts(page - 1, size);
        List<Board> boardList = boards.getContent();
        List<BoardDto.Response> responses = mapper.boardsToBoardResponse(boardList);

        return new ResponseEntity<>(new MultiResponseDto<>(responses,boards), HttpStatus.OK);
    }

    // 질문 삭제
    @DeleteMapping("{post_id}")
    public ResponseEntity deleteBoard(@PathVariable("post_id") long postId) {

        boardService.deleteBoard(postId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
