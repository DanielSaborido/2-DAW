package com.example.juegopalabras.modelo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;

@Data @NoArgsConstructor @AllArgsConstructor @Entity
public class Juego {
    @Id @GeneratedValue
    private Long idJuego;

    @Enumerated(EnumType.STRING)
    private Dificultad dificultadjuego;

    private String descripcion;
    private Integer intentosDificultad;

    @OneToMany(mappedBy = "juego", cascade = CascadeType.ALL)
    private List<Palabra> palabras;
}
