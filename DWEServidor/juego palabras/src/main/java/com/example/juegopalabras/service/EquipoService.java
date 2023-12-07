package com.example.juegopalabras.service;
import com.example.juegopalabras.modelo.Equipo;
import com.example.juegopalabras.modelo.Jugador;

import java.util.List;
import java.util.Optional;

public interface EquipoService {
    List<Equipo> findAll();
    Optional<Equipo> findById(Long id);
    Equipo save(Equipo equipo);
    void deleteById(Long id);
    boolean existsById(Long id);
}
