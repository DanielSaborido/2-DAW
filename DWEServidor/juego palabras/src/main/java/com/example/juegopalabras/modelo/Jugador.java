package com.example.juegopalabras.modelo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data @NoArgsConstructor @AllArgsConstructor @Entity
public class Jugador {
    @Id @GeneratedValue
    private Long id;
    private String user;
    private Integer score;
    private String avatar;

    @ManyToOne
    @JoinColumn(name="equipo_id")
    private Equipo equipo;

    @OneToMany(mappedBy = "jugador", cascade = CascadeType.ALL)
    private List<Partida> partidas;
}
