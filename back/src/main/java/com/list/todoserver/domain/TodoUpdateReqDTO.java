package com.list.todoserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
@DynamicInsert
public class TodoUpdateReqDTO {
    private Integer id;
    private String content;
    private Boolean isDone;
    private LocalDate createAt;
    private Boolean deleteAt;
}