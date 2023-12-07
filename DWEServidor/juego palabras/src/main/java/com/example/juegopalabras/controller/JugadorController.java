package com.example.juegopalabras.controller;

import com.example.juegopalabras.error.JugadorNotFoundException;
import com.example.juegopalabras.modelo.Jugador;
import com.example.juegopalabras.service.JugadorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class JugadorController {

    private final JugadorService jugadorService;

    @GetMapping("/jugador")
    public List<Jugador> findAll() {
        List<Jugador> result =  jugadorService.findAll();
        if(result.isEmpty()){
            throw new JugadorNotFoundException();
        }
        return result;
    }

    @GetMapping("/jugador/{id}")
    public Jugador findById(@PathVariable Long id) {
        return jugadorService.findById(id).orElseThrow(() -> new JugadorNotFoundException(id));
    }

    @PostMapping("/jugador")
    public Jugador newJugador(@RequestBody Jugador newJugador){
        return jugadorService.save(newJugador);
    }

    @PutMapping("/jugador/{id}")
    public Jugador updateJugador(@RequestBody Jugador updateJugador, @PathVariable Long id){
        if(jugadorService.existsById(id)){
            Jugador jugador = jugadorService.findById(id).get();
            jugador.setNombre(updateJugador.getNombre());
            jugador.setClave(updateJugador.getClave());
            jugador.setAvatar(updateJugador.getAvatar());
            jugador.setCorreo(updateJugador.getCorreo());
            jugador.setRol(updateJugador.getRol());
            jugador.setEquipo(updateJugador.getEquipo());
            jugador.setFechaModificacion(LocalDateTime.now());
            return jugadorService.save(jugador);
        } else {
            throw new JugadorNotFoundException(id);
        }
    }

    @DeleteMapping("/jugador/{id}")
    public Jugador deleteJugador(@PathVariable Long id) {
        if(jugadorService.existsById(id)){
            Jugador result = jugadorService.findById(id).get();
            jugadorService.deleteById(id);
            return result;
        } else {
            throw new JugadorNotFoundException(id);
        }
    }
    @GetMapping("/equipo/{id_equipo}/jugadores")
    public ResponseEntity<List<Jugador>> obtenerJugadoresPorEquipo(@PathVariable Long id_equipo) {
        List<Jugador> jugadores = jugadorService.obtenerJugadoresPorEquipo(id_equipo);

        if(jugadores == null || jugadores.isEmpty()){
            throw new JugadorNotFoundException();
        }
        return ResponseEntity.ok(jugadores);
    }
}
