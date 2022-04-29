package com.example.todo_app.services;


import com.example.todo_app.entities.Task;
import com.example.todo_app.entities.TodoList;
import com.example.todo_app.repositories.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TodoListService {

    @Autowired
    private TodoListRepository todoListRepository;

    public TodoList saveOrUpdateTodoList(TodoList todoList){
        return todoListRepository.save(todoList);
    }

    public List<TodoList> findAllTodoListByUsername(String username){
        List<TodoList> todoList = todoListRepository.findAllByUsername(username);
        return todoList;
    }

    public TodoList findAllTodoListById(Long Id){
        TodoList todoList = todoListRepository.findById(Id).get();
        return todoList;
    }

    public List<TodoList> findAllTodoLists(){
        return todoListRepository.findAll();
    }

    public TodoList findTodoListByID(Long id){
        return todoListRepository.findById(id).get();
    }

    public void deleteTodoListById(Long id){
        todoListRepository.deleteById(id);
    }

    public List<Task> findAllTasksByTodoListID(Long todoListID){
        TodoList todoList = todoListRepository.findById(todoListID).get();

        List<Task> tasks=todoList.getTasks();

        return tasks;

    }


}
