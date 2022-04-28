package com.example.todo_app.repositories;


import com.example.todo_app.entities.TodoList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoListRepository extends JpaRepository<TodoList,Long> {
    @Override
    List<TodoList> findAll();

    TodoList findByUsername(String username);

    void deleteByUsername(String username);
}
