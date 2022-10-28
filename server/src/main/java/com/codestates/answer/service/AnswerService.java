package com.codestates.answer.service;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AnswerService {
    private AnswerRepository answerRepository;
    public AnswerService(AnswerRepository answerRepository){
        this.answerRepository = answerRepository;
    }
    // 답변 생성
    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }
    // 답변 수정
    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getAnswerBody())
                .ifPresent(answerBody -> findAnswer.setAnswerBody(answerBody));
        return answerRepository.save(findAnswer);
    }
    /**
    public Answer findAnswer(long answerId){
        return findVerifiedAnswer(answerId);
    }
     **/
    // 답변 전체 보기
    @Transactional(readOnly = true)
    public List<Answer> findAnswers(){
        return (List<Answer>) answerRepository.findAll();
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
}
