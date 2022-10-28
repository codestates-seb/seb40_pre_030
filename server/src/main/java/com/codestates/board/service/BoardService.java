package com.codestates.board.service;

import com.codestates.board.entity.Board;
import com.codestates.board.repository.BoardRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class BoardService {

    private final BoardRepository boardRepository;

    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    // 질문 생성
    public Board createBoard(Board board) {

        return boardRepository.save(board);
    }

    // 질문 수정
    public Board updateBoard(Board board) {

        // 수정할 질문이 존재하는지 확인
        Board findBoard = findVerifiedBoard(board.getBoardId());

        Optional.ofNullable(board.getTitle()).ifPresent(title -> findBoard.setTitle(title));
        Optional.ofNullable(board.getBody()).ifPresent(body -> findBoard.setBody(body));

        return boardRepository.save(findBoard);
    }

    // 특정 질문 출력
    @Transactional(readOnly = true)
    public Board findPost(long postId) {
        Board findPost = findVerifiedBoard(postId);
        findPost.setCreatedAt(findPost.getCreatedAt());
        return findPost;
    }

    // 질문 전체 목록 출력
    @Transactional(readOnly = true)
    public Page<Board> findPosts(int page, int size) {

        return boardRepository.findAll(PageRequest.of(page, size, Sort.by("boardId").descending()));
    }

    // 질문 삭제
    public void deleteBoard(long boardId) {

        Board findBoard = findVerifiedBoard(boardId);
        boardRepository.delete(findBoard);
    }

    // 질문이 존재하는지 검증
    @Transactional(readOnly = true)
    public Board findVerifiedBoard(long boardId) {
        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        Board findPost = optionalBoard.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findPost;
    }
}
