package com.academia.controller;

import com.academia.entity.Profesor;
import com.academia.service.ProfesorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/profesores")
@CrossOrigin(origins = "http://localhost:4200") // Para desarrollo con Angular
public class ProfesorController {
    
    @Autowired
    private ProfesorService profesorService;
    
    @GetMapping
    public ResponseEntity<List<Profesor>> obtenerTodos() {
        List<Profesor> profesores = profesorService.obtenerTodos();
        return ResponseEntity.ok(profesores);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Profesor> obtenerPorId(@PathVariable Long id) {
        Optional<Profesor> profesor = profesorService.obtenerPorId(id);
        return profesor.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<Profesor> crear(@RequestBody Profesor profesor) {
        try {
            Profesor profesorCreado = profesorService.crear(profesor);
            return ResponseEntity.status(HttpStatus.CREATED).body(profesorCreado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Profesor> actualizar(@PathVariable Long id, @RequestBody Profesor profesor) {
        try {
            Profesor profesorActualizado = profesorService.actualizar(id, profesor);
            return ResponseEntity.ok(profesorActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        profesorService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
