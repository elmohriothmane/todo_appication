package com.example.todo_app.entities;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAttribute;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data
public class TodoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,length = 25)
    private String listName;

    @Column(nullable = false,unique = true,updatable = false)
        private String username;

    private String description;


}
