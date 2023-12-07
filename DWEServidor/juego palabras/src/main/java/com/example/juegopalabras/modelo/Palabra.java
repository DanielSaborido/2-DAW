package com.example.juegopalabras.modelo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Data @NoArgsConstructor @AllArgsConstructor @Entity
public class Palabra {
    @Id @GeneratedValue
    private Long idPalabra;

    @ManyToOne
    @JoinColumn(name="idJuego")
    private Juego juego;

    private String palabra;
    private Dificultad dificultadPalabra;
}

