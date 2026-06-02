package com.academia.repository;

import com.academia.entity.Clase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClaseRepository extends JpaRepository<Clase, Long> {
    List<Clase> findByProfesorId(Long profesorId);
}
