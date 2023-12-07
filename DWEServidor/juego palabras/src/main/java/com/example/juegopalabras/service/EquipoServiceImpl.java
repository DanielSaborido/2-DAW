package com.example.juegopalabras.service;
import com.example.juegopalabras.modelo.Equipo;
import com.example.juegopalabras.repos.EquipoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EquipoServiceImpl implements EquipoService {
    private final EquipoRepository equipoRepository;

    @Override
    public List<Equipo> findAll() {
        return equipoRepository.findAll();
    }

    @Override
    public Optional<Equipo> findById(Long id) {
        return equipoRepository.findById(id);
    }

    @Override
    public Equipo save(Equipo equipo) {
        equipo.setFechaCreacion(LocalDateTime.now());
        equipo.setFechaModificacion(LocalDateTime.now());
        return equipoRepository.save(equipo);
    }

    @Override
    public void deleteById(Long id) {
        equipoRepository.deleteById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return equipoRepository.existsById(id);
    }

}
