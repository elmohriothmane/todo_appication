package com.example.todo_app.services;


import com.example.todo_app.entities.TodoList;
import com.example.todo_app.repositories.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListService {

    @Autowired
    private TodoListRepository todoListRepository;

    public TodoList saveOrUpdateTodoList(TodoList todoList){
        return todoListRepository.save(todoList);
    }
}
