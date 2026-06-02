package com.academia.service;

import com.academia.entity.Profesor;
import com.academia.repository.ProfesorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfesorService {
    
    @Autowired
    private ProfesorRepository profesorRepository;
    
    public List<Profesor> obtenerTodos() {
        return profesorRepository.findAll();
    }
    
    public Optional<Profesor> obtenerPorId(Long id) {
        return profesorRepository.findById(id);
    }
    
    public Profesor crear(Profesor profesor) {
        // Validacion basica
        if (profesor.getNombre() == null || profesor.getNombre().trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre del profesor es obligatorio");
        }
        if (profesor.getEmail() == null || profesor.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("El email es obligatorio");
        }
        
        // Verificar que no exista otro profesor con el mismo email
        Optional<Profesor> existente = profesorRepository.findByEmail(profesor.getEmail());
        if (existente.isPresent()) {
            throw new IllegalArgumentException("Ya existe un profesor con ese email");
        }
        
        return profesorRepository.save(profesor);
    }
    
    public Profesor actualizar(Long id, Profesor profesorActualizado) {
        Optional<Profesor> profesor = profesorRepository.findById(id);
        
        if (profesor.isPresent()) {
            Profesor p = profesor.get();
            p.setNombre(profesorActualizado.getNombre());
            p.setEspecialidad(profesorActualizado.getEspecialidad());
            p.setTelefono(profesorActualizado.getTelefono());
            // No actualizar email para evitar problemas de integridad
            return profesorRepository.save(p);
        }
        
        throw new RuntimeException("Profesor no encontrado con id: " + id);
    }
    
    public void eliminar(Long id) {
        profesorRepository.deleteById(id);
    }
}
