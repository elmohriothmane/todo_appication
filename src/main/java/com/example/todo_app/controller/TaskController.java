package com.example.todo_app.controller;


import com.example.todo_app.entities.Task;
import com.example.todo_app.entities.TodoList;
import com.example.todo_app.exceptions.ErrorResponse;
import com.example.todo_app.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/task")
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/{todoListID}")
    public ResponseEntity<Task> addTasktoTodoList(@RequestBody Task task, @PathVariable(value = "todoListID") Long todoListID  ){

        Task task1=taskService.addTask(todoListID,task);

        if (task1 !=null)
            return new ResponseEntity<Task>(task1, HttpStatus.ACCEPTED);

        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setMessage("task not found");
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);


    }

    @PatchMapping("/{taskId}")
    public ResponseEntity<?> updateTask(@RequestBody Task task,@PathVariable(value = "taskId") Long id){
        Task task1=taskService.updateTaskById(task,id);

        if (task1 !=null)
            return new ResponseEntity<Task>(task1,HttpStatus.ACCEPTED);

        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setMessage("task not found");
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);


    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<?> deleteTask(@PathVariable(value = "taskId") Long id){
        taskService.deleteTaskById(id);




    }

    @GetMapping("/{todoListID}")
    public ResponseEntity<?> getTodoLisTasktByID(@PathVariable(value = "taskId") Long taskId){
        Task task=taskService.getTasktByID(taskId);

        if (task !=null)
            return  new ResponseEntity<Task>(task,HttpStatus.ACCEPTED);

        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setMessage("task not found");
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);


    }


}
