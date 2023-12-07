package com.example.juegopalabras.modelo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data @NoArgsConstructor @AllArgsConstructor @Entity
public class Equipo {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private String emblema;
    private Integer puntuacion;
}
