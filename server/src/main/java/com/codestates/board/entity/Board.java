package com.codestates.board.entity;

import com.codestates.answer.entity.Answer;
import com.codestates.user.entity.User;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

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

    @URL
    @Column
    private String photoURL;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    public void setUser(User user) {
        this.user = user;
    }

    @Column
    private String nickName;

    @Column
    private String title;

    @Column(columnDefinition = "TEXT")
    private String body;

    @Column
    private int voteCount;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private List<Answer> answer = new ArrayList<>();

    public void addAnswer(Answer answer) {
        this.answer.add(answer);
        if (answer.getBoard() != this) {
            answer.addBoard(this);
        }
    }
}
