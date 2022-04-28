package com.example.todo_app.controller;


import com.example.todo_app.entities.TodoList;
import com.example.todo_app.repositories.TodoListRepository;
import com.example.todo_app.services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/todolist")
public class TodoListController {

    @Autowired
    private TodoListService todoListService;

    @PostMapping("")
    public ResponseEntity<TodoList> createNewTodoList(@RequestBody TodoList todoList){

        TodoList todoList1 = todoListService.saveOrUpdateTodoList(todoList);
        return  new ResponseEntity<TodoList>(todoList1, HttpStatus.CREATED);
    }
}
