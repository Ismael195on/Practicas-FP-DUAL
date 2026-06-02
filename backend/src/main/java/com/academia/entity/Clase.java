package com.academia.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "clases")
public class Clase {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String nombre;
    
    private String descripcion;
    
    @Column(nullable = false)
    private String nivel; // Principiante, Intermedio, Avanzado
    
    @Column(nullable = false)
    private Integer maxAlumnos;
    
    @Column(nullable = false)
    private LocalDateTime horario;
    
    private Integer duracionMinutos; // 60, 90, etc
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "profesor_id", nullable = false)
    private Profesor profesor;
    
    // Constructores
    public Clase() {}
    
    public Clase(String nombre, String descripcion, String nivel, Integer maxAlumnos, 
                 LocalDateTime horario, Integer duracionMinutos, Profesor profesor) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.nivel = nivel;
        this.maxAlumnos = maxAlumnos;
        this.horario = horario;
        this.duracionMinutos = duracionMinutos;
        this.profesor = profesor;
    }
    
    // Getters y Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public String getDescripcion() {
        return descripcion;
    }
    
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
    public String getNivel() {
        return nivel;
    }
    
    public void setNivel(String nivel) {
        this.nivel = nivel;
    }
    
    public Integer getMaxAlumnos() {
        return maxAlumnos;
    }
    
    public void setMaxAlumnos(Integer maxAlumnos) {
        this.maxAlumnos = maxAlumnos;
    }
    
    public LocalDateTime getHorario() {
        return horario;
    }
    
    public void setHorario(LocalDateTime horario) {
        this.horario = horario;
    }
    
    public Integer getDuracionMinutos() {
        return duracionMinutos;
    }
    
    public void setDuracionMinutos(Integer duracionMinutos) {
        this.duracionMinutos = duracionMinutos;
    }
    
    public Profesor getProfesor() {
        return profesor;
    }
    
    public void setProfesor(Profesor profesor) {
        this.profesor = profesor;
    }
}
