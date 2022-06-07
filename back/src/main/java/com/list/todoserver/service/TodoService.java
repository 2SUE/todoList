package com.list.todoserver.service;

import com.list.todoserver.domain.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;

    public List<Todo> selTodoList() {
        return todoRepository.findByDeleteAt(false);
    }

    @Transactional // db 트랜잭션 자동으로 commit 해줌
    public Integer insTodo(TodoSaveReqDTO param) {
        System.out.println("~~~서비스단~~~");

        TodoSaveReqDTO todo = TodoSaveReqDTO.builder().content(param.getContent()).build();
        return todoRepository.save(todo.toEntity()).getId();
    }

    @Transactional
    public void updContent(TodoUpdateReqDTO param) {
        System.out.println("modTodo() 실행");

        Todo todo = todoRepository.findById(param.getId()).orElseThrow(()->new IllegalArgumentException());
        todo.updateContent(param.getContent());
    }

    @Transactional
    public void updIsDone(TodoUpdateReqDTO param) {
        System.out.println("updIsDone() 실행");

        Todo todo = todoRepository.findById(param.getId()).orElseThrow(()->new IllegalArgumentException());
        todo.updateIsDone(param.getIsDone());
    }

    @Transactional
    public void delTodo(TodoUpdateReqDTO param) {
        System.out.println("delTodo() 실행");

        Todo todo = todoRepository.findById(param.getId()).orElseThrow(()->new IllegalArgumentException());
        todo.deleteTodo(param.getDeleteAt());
    }
}
