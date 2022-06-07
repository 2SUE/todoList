package com.list.todoserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

/*
    Entity class
    DB에 저장하기 위해 유저가 정의한 클래스, domain
    실제 DB 테이블과 매칭
    setter 금지
    controller, service에서 사용x
*/

@Getter
@NoArgsConstructor // 기본생성자 자동 생성
@Entity // 테이블과 링크될 클래스임을 명시
public class Todo {

    @Id // PK 필드 명시
    @GeneratedValue(strategy = GenerationType.IDENTITY) // PK 생성 규칙, auto_increment
    private Integer id;

    @Column(length=200, nullable = false)
    private String content;

    @Column(nullable = false)
    private Boolean isDone;

    @Column(nullable = false, updatable = false)
    private LocalDate createAt;

    @Column(nullable = false)
    private Boolean deleteAt;

    @Builder
    public Todo(String content, LocalDate createAt, Boolean isDone, Boolean deleteAt) {
        this.content = content;
        this.createAt = createAt;
        this.isDone = isDone;
        this.deleteAt = deleteAt;
    }

    public void updateContent(String content) {
        this.content = content;
    }

    public void updateIsDone(Boolean isDone) {
        this.isDone = isDone;
    }

    public void deleteTodo(Boolean deleteAt) {
        this.deleteAt = deleteAt;
    }
}
