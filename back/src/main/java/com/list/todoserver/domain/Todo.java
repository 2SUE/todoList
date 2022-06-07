package com.list.todoserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@NoArgsConstructor 
@Entity 
public class Todo {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
