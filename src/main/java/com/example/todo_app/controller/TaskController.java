package com.example.todo_app.controller;


import com.example.todo_app.entities.Task;
import com.example.todo_app.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/task")
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/{todoListID}")
    public ResponseEntity<Task> addTasktoTodoList(@RequestBody Task task, @PathVariable(value = "todoListID") Long todoListID  ){

        Task task1=taskService.addTask(todoListID,task);

        return new ResponseEntity<Task>(task1, HttpStatus.ACCEPTED);
    }

    @PatchMapping("/{taskId}")
    public ResponseEntity<?> updateTask(@RequestBody Task task,@PathVariable(value = "taskId") Long id){
        Task task1=taskService.updateTaskById(task,id);
        return new ResponseEntity<Task>(task1,HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<?> deleteTask(@PathVariable(value = "taskId") Long id){
        taskService.deleteTaskById(id);
        return new ResponseEntity<String>("Task deleted",HttpStatus.ACCEPTED);
    }


}
