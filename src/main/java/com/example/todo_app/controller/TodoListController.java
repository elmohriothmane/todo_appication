package com.example.todo_app.controller;


import com.example.todo_app.entities.Task;
import com.example.todo_app.entities.TodoList;
import com.example.todo_app.exceptions.ErrorResponse;
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
@CrossOrigin
public class TodoListController {

    @Autowired
    private TodoListService todoListService;

    @PostMapping("")
    public ResponseEntity<?> createNewTodoList( @RequestBody TodoList todoList){

        if( (todoList.getListName()!=null) && (!todoList.getListName().isEmpty()) && (todoList.getDescription()!=null) && (!todoList.getListName().isEmpty())) {

            TodoList todoList1 = todoListService.saveOrUpdateTodoList(todoList);
            return  new ResponseEntity<TodoList>(todoList1, HttpStatus.CREATED);

        }

        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setMessage("To do Liste Name And Description Should Not be Empty");
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);


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
