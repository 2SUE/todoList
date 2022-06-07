package com.list.todoserver.controller;

import com.list.todoserver.domain.TodoSaveReqDTO;
import com.list.todoserver.domain.TodoUpdateReqDTO;
import com.list.todoserver.service.TodoService;
import com.list.todoserver.domain.Todo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TodoController {
    private final TodoService service;

    @GetMapping("/selList")
    public List<Todo> selTodoList() {
        return service.selTodoList();
    }

    @PostMapping("/insTodo")
    public Integer insTodo(@RequestBody TodoSaveReqDTO param) {
        return service.insTodo(param);
    }

    @PutMapping("/updContent")
    public void updContent(@RequestBody TodoUpdateReqDTO param) {
        service.updContent(param);
    }

    @PutMapping("/updIsDone")
    public void updIsDone(@RequestBody TodoUpdateReqDTO param) {
        service.updIsDone(param);
    }

    @DeleteMapping("/delTodo")
    public void delTodo(@RequestBody TodoUpdateReqDTO param) {
        service.delTodo(param);
    }
}