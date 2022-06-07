package com.list.todoserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDate;

// DB 등록할 때 사용

@Getter
@NoArgsConstructor
public class TodoSaveReqDTO {
    private String content;
    private Boolean isDone;
    private LocalDate createAt;
    private Boolean deleteAt;

    @Builder
    public TodoSaveReqDTO(String content, Boolean isDone, LocalDate createAt, Boolean deleteAt)
    {
        this.content = content;
        this.isDone = false;
        this.createAt = LocalDate.now();
        this.deleteAt = false;
    }

    // DTO -> Entity
    public Todo toEntity() {
        return Todo.builder()
                .content(content)
                .isDone(isDone)
                .createAt(createAt)
                .deleteAt(deleteAt)
                .build();
    }
}