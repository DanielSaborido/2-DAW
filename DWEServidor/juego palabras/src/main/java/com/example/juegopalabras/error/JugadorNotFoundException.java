package com.example.juegopalabras.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class JugadorNotFoundException extends RuntimeException{

    public JugadorNotFoundException(){
        super("No se pudo encontrar ningun jugador");
    }
    public JugadorNotFoundException(Long id){
        super("No se puede encontrar el jugador con la ID: " + id);
    }
}