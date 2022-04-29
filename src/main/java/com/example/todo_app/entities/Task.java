package com.example.todo_app.entities;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date date;

    @Column(nullable = false)
    private String status;

    @ManyToOne(fetch =FetchType.EAGER)
    @JoinColumn(name = "todo_list_id", nullable = false,updatable = false)
    @JsonIgnore
    private TodoList todoList;


}
