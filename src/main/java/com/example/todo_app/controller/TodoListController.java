package com.example.todo_app.controller;


import com.example.todo_app.entities.Task;
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

    @GetMapping("/{username}/list")
    public ResponseEntity<?> getAllTodoListByUsername(@PathVariable(value = "username") String username){
        List<TodoList> todoList1=todoListService.findAllTodoListByUsername(username);

        return  new ResponseEntity<List<TodoList>>(todoList1,HttpStatus.ACCEPTED);

    }

    @GetMapping("/{todoListID}")
    public ResponseEntity<?> getTodoListByID(@PathVariable(value = "todoListID") Long todoListID){
        TodoList todoList1=todoListService.findTodoListByID(todoListID);

        return  new ResponseEntity<TodoList>(todoList1,HttpStatus.ACCEPTED);
    }

    @GetMapping("/alltodolists")
    public List<TodoList> getAllTodoList(){
        return todoListService.findAllTodoLists();
    }

    @DeleteMapping("/{todolistID}")
    public ResponseEntity<?> deleteTodoList(@PathVariable(value = "todolistID") Long todolistID){
        todoListService.deleteTodoListById(todolistID);

        return new ResponseEntity<String>("Liste removed", HttpStatus.ACCEPTED);
    }

    @GetMapping("{TodoListById}/tasks")
    public ResponseEntity<?> getAllTasksBydeleteTodoListById(@PathVariable(value = "TodoListById") Long deleteTodoListById ){

        List<Task> tasks = todoListService.findAllTasksByTodoListID(deleteTodoListById);

        return new ResponseEntity<List<Task>>(tasks,HttpStatus.ACCEPTED);
    }


}
