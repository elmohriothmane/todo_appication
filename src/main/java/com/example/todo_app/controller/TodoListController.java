package com.example.todo_app.controller;


import com.example.todo_app.entities.TodoList;
import com.example.todo_app.repositories.TodoListRepository;
import com.example.todo_app.services.TodoListService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

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

    @GetMapping("/{username}")
    public ResponseEntity<?> getTodoListByUsername(@PathVariable(value = "username") String username){

        TodoList todoList1=todoListService.findTodoListByUsername(username);

        return  new ResponseEntity<TodoList>(todoList1,HttpStatus.ACCEPTED);


    }

    @GetMapping("/alltodolists")
    public List<TodoList> getAllTodoList(){
        return todoListService.findAllTodoLists();
    }

    @DeleteMapping("/{todolistID}")
    public ResponseEntity<?> deleteTodoList(@PathVariable(value = "todolistID") Long todolistID){
        todoListService.deleteTodoListByUsername(todolistID);

        return new ResponseEntity<String>("Liste removed", HttpStatus.ACCEPTED);
    }
}
