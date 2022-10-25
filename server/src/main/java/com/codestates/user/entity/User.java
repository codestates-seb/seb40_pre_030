package com.codestates.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(length = 20,nullable = false,updatable = false,unique = true)
    private String name;

    @Column(length = 15,nullable = false,updatable = false)
    private String password;

    @Column(nullable = false,updatable = false)
    private String email;

    private String states;

    @Enumerated(EnumType.STRING)
    @Column(length = 20, nullable = false)
    private UserStatus userStatus;

//    보류
//    @OneToMany(mappedBy = "user")
//    private List<Question> question = new ArrayList<>();

//    @OneToMany(mappedBy = "user")
//    private List<Answer> answer = new ArrayList<>();

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
