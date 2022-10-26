package com.codestates.answer.service;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private AnswerRepository answerRepository;
    public AnswerService(AnswerRepository answerRepository){
        this.answerRepository = answerRepository;
    }
    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }
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
    public List<Answer> findAnswers(){
        return (List<Answer>) answerRepository.findAll();
    }
    public void deleteAnswer(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }
    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new RuntimeException("ANSWER_NOT_FOUND"));
        return findAnswer;
    }
}
