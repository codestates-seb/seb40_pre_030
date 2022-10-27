package com.codestates.board.entity;

import com.codestates.answer.entity.Answer;
import com.codestates.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Entity
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    private String title;

    private String body;

    @OneToMany(mappedBy = "board")
    private List<Answer> answer = new ArrayList<>();
}
