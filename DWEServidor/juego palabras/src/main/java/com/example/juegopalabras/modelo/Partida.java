package com.example.juegopalabras.modelo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data @NoArgsConstructor @AllArgsConstructor @Entity
public class Partida {
    @Id @GeneratedValue
    private Long id;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Integer intentos;
    private String palabraRonda;
    private Integer puntuacion;

    @ManyToOne
    @JoinColumn(name="jugador_id")
    private Jugador jugador;

    @ManyToOne
    @JoinColumn(name="juego_id")
    private Juego juego;
}