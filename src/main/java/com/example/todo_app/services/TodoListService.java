package com.example.todo_app.services;


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

    public TodoList findTodoListByUsername(String username){
        TodoList todoList = todoListRepository.findByUsername(username);
        return todoList;
    }

    public List<TodoList> findAllTodoLists(){
        return todoListRepository.findAll();
    }

    public void deleteTodoListByUsername(Long id){
        todoListRepository.deleteById(id);
    }
}
