package com.codestates.answer.entity;

import com.codestates.board.entity.Board;
import com.codestates.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    private String answerBody;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "BOARD_ID")
    private Board board;
}
