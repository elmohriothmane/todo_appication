package com.example.todo_app.services;


import com.example.todo_app.entities.Task;
import com.example.todo_app.entities.TodoList;
import com.example.todo_app.repositories.TaskRepository;
import com.example.todo_app.repositories.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private TodoListRepository todoListRepository;

    public Task addTask(Long todoListId,Task task){
        TodoList todoList = todoListRepository.findById(todoListId).get();
        todoList.getTasks().add(task);
        task.setTodoList(todoList);

        return taskRepository.save(task);

    }


    public Task updateTaskById(Task updatedTask,Long ListId){
        Task task=taskRepository.getById(ListId);
        task = updatedTask;

        return taskRepository.save(task);
    }

    public void deleteTaskById(Long id){
        taskRepository.deleteById(id);
    }

}
