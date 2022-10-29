package com.codestates.board.entity;

import com.codestates.answer.entity.Answer;
import com.codestates.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Entity
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @Column
    private String photoURL;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column
    private String nickName = "Ayaan";

    @Column
    private String title;

    @Column
    private String body;

    @Column// 일단 해놓음
    private int voteCount;

    @OneToMany(mappedBy = "board")
    private List<Answer> answer = new ArrayList<>();

}
