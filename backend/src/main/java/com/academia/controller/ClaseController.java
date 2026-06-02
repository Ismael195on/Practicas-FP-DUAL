package com.academia.controller;

import com.academia.entity.Clase;
import com.academia.service.ClaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clases")
@CrossOrigin(origins = "http://localhost:4200")
public class ClaseController {
    
    @Autowired
    private ClaseService claseService;
    
    @GetMapping
    public ResponseEntity<List<Clase>> obtenerTodas() {
        List<Clase> clases = claseService.obtenerTodas();
        return ResponseEntity.ok(clases);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Clase> obtenerPorId(@PathVariable Long id) {
        Optional<Clase> clase = claseService.obtenerPorId(id);
        return clase.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    // Endpoint para obtener las clases de un profesor especifico
    @GetMapping("/profesor/{profesorId}")
    public ResponseEntity<List<Clase>> obtenerPorProfesor(@PathVariable Long profesorId) {
        try {
            List<Clase> clases = claseService.obtenerPorProfesor(profesorId);
            return ResponseEntity.ok(clases);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<Clase> crear(@RequestBody Clase clase) {
        try {
            Clase claseCreada = claseService.crear(clase);
            return ResponseEntity.status(HttpStatus.CREATED).body(claseCreada);
        } catch (IllegalArgumentException | RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Clase> actualizar(@PathVariable Long id, @RequestBody Clase clase) {
        try {
            Clase claseActualizada = claseService.actualizar(id, clase);
            return ResponseEntity.ok(claseActualizada);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        claseService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
