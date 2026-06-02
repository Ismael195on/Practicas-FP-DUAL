package com.academia.service;

import com.academia.entity.Clase;
import com.academia.entity.Profesor;
import com.academia.repository.ClaseRepository;
import com.academia.repository.ProfesorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClaseService {
    
    @Autowired
    private ClaseRepository claseRepository;
    
    @Autowired
    private ProfesorRepository profesorRepository;
    
    public List<Clase> obtenerTodas() {
        return claseRepository.findAll();
    }
    
    public Optional<Clase> obtenerPorId(Long id) {
        return claseRepository.findById(id);
    }
    
    // TODO: Hacer que esto devuelva pageable en lugar de lista completa
    public List<Clase> obtenerPorProfesor(Long profesorId) {
        // Verificar que el profesor existe
        Optional<Profesor> profesor = profesorRepository.findById(profesorId);
        if (profesor.isEmpty()) {
            throw new RuntimeException("Profesor no encontrado");
        }
        return claseRepository.findByProfesorId(profesorId);
    }
    
    public Clase crear(Clase clase) {
        // Validaciones
        if (clase.getNombre() == null || clase.getNombre().trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre de la clase es obligatorio");
        }
        
        if (clase.getProfesor() == null || clase.getProfesor().getId() == null) {
            throw new IllegalArgumentException("Debe asignar un profesor");
        }
        
        // Verificar que el profesor existe
        Optional<Profesor> profesor = profesorRepository.findById(clase.getProfesor().getId());
        if (profesor.isEmpty()) {
            throw new RuntimeException("El profesor no existe");
        }
        
        return claseRepository.save(clase);
    }
    
    public Clase actualizar(Long id, Clase claseActualizada) {
        Optional<Clase> clase = claseRepository.findById(id);
        
        if (clase.isPresent()) {
            Clase c = clase.get();
            c.setNombre(claseActualizada.getNombre());
            c.setDescripcion(claseActualizada.getDescripcion());
            c.setNivel(claseActualizada.getNivel());
            c.setMaxAlumnos(claseActualizada.getMaxAlumnos());
            c.setHorario(claseActualizada.getHorario());
            c.setDuracionMinutos(claseActualizada.getDuracionMinutos());
            
            // Actualizar profesor si viene en la peticion
            if (claseActualizada.getProfesor() != null && claseActualizada.getProfesor().getId() != null) {
                Optional<Profesor> profesor = profesorRepository.findById(claseActualizada.getProfesor().getId());
                if (profesor.isEmpty()) {
                    throw new RuntimeException("El profesor no existe");
                }
                c.setProfesor(profesor.get());
            }
            
            return claseRepository.save(c);
        }
        
        throw new RuntimeException("Clase no encontrada con id: " + id);
    }
    
    public void eliminar(Long id) {
        claseRepository.deleteById(id);
    }
}
