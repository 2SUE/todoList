package com.list.todoserver.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
@DynamicInsert
public class TodoResDTO {
    private Integer id;
    private String content;
    private Boolean isDone;
    private LocalDate createAt;
    private Boolean deleteAt;

    public TodoResDTO(Todo entity) {
        this.id = entity.getId();
        this.content = entity.getContent();
        this.isDone = entity.getIsDone();
        this.createAt = entity.getCreateAt();
        this.deleteAt = entity.getDeleteAt();
    }

}