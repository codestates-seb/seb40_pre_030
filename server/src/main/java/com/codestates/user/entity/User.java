package com.codestates.user.entity;

import com.codestates.answer.entity.Answer;
import com.codestates.board.entity.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column
    private String email;

    @Column
    private String nickName;

    @Column
    private String password;

    @Column
    private String photoURL;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    @Column(length = 20, nullable = false)
    private UserStatus userStatus = UserStatus.USER_ACTIVE;

    @OneToMany(mappedBy = "user")
    private List<Board> question = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Answer> answer = new ArrayList<>();

    public enum UserStatus{
        USER_ACTIVE("활동중"),
        USER_SLEEP("휴면 상태"),
        USER_QUIT("탈퇴 상태");

        @Getter
        public String status;

        UserStatus(String status) {
            this.status = status;
        }
    }
}
