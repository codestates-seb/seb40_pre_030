package com.codestates.answer.service;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.board.entity.Board;
import com.codestates.board.repository.BoardRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AnswerService {

    private AnswerRepository answerRepository;
    private BoardRepository boardRepository;

    public AnswerService(AnswerRepository answerRepository, BoardRepository boardRepository) {
        this.answerRepository = answerRepository;
        this.boardRepository = boardRepository;
    }

    // 답변 생성
    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    // 답변 수정
    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getAnswerBody()).ifPresent(answerBody -> findAnswer.setAnswerBody(answerBody));
        Optional.ofNullable(answer.getPhotoURL()).ifPresent(photo -> findAnswer.setPhotoURL(photo));
        return answerRepository.save(findAnswer);
    }

    // 답변 투표 +1
    public Answer voteAnswerUp(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setVoteCount(findAnswer.getVoteCount() + 1);
        Answer updateAnswer = answerRepository.save(findAnswer);
        return updateAnswer;
    }
    // 답변 투표 -1
    public Answer voteAnswerDown(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setVoteCount(findAnswer.getVoteCount() - 1);
        Answer updateAnswer = answerRepository.save(findAnswer);
        return updateAnswer;
    }
    /**
     public Answer findAnswer(long answerId){
     return findVerifiedAnswer(answerId);
     }
     **/

    // 답변 전체 보기
    @Transactional(readOnly = true)
    public Page<Answer> findAnswers(int page, int size){
        return answerRepository.findAll(PageRequest.of(page, size, Sort.by("answerId").descending()));
    }

    // 답변 삭제
    public void deleteAnswer(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    @Transactional(readOnly = true)
    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    @Transactional(readOnly = true)
    public Board findVerifiedboard(long boardId){
        Optional<Board> optionalboard = boardRepository.findById(boardId);
        Board findBoard = optionalboard.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND)); // BOARD_NOT_FOUND 추가해야 함
        return findBoard;
    }
}