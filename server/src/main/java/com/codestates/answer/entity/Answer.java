package com.codestates.answer.entity;

import com.codestates.board.entity.Board;
import com.codestates.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    private Long boardId;

    @Column(columnDefinition = "TEXT")
    private String answerBody;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    private String nickName;

    private String photoURL;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "BOARD")
    private Board board;

    @Column
    private int voteCount;

    public void addBoard(Board board) {
        this.board = board;
        if (!this.board.getAnswer().contains(this)) {
            this.board.getAnswer().add(this);
        }
    }
}
