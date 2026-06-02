-- Insertar profesores
INSERT INTO profesores (nombre, email, especialidad, telefono) VALUES 
('Carlos García López', 'carlos.garcia@academia.com', 'Fútbol', '654321098');

INSERT INTO profesores (nombre, email, especialidad, telefono) VALUES 
('María Rodríguez Pérez', 'maria.rodriguez@academia.com', 'Natación', '654321099');

INSERT INTO profesores (nombre, email, especialidad, telefono) VALUES 
('Juan Martínez Santos', 'juan.martinez@academia.com', 'Tenis', '654321100');

INSERT INTO profesores (nombre, email, especialidad, telefono) VALUES 
('Ana López Fernández', 'ana.lopez@academia.com', 'Yoga y Pilates', '654321101');

INSERT INTO profesores (nombre, email, especialidad, telefono) VALUES 
('Roberto Díaz Moreno', 'roberto.diaz@academia.com', 'Boxeo', '654321102');

-- Insertar clases para Carlos García (Fútbol)
INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Fútbol Base', 'Iniciacion al futbol, tecnicas basicas y juego en equipo', 'Principiante', 15, '2024-06-10 16:00:00', 60, 1);

INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Fútbol Intermedio', 'Mejora de tecnica individual y tactica de equipo', 'Intermedio', 14, '2024-06-10 17:30:00', 90, 1);

INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Fútbol Avanzado', 'Preparacion para competiciones, estrategia y rendimiento', 'Avanzado', 12, '2024-06-11 18:00:00', 90, 1);

-- Insertar clases para María Rodríguez (Natación)
INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Natacion Infantil', 'Adaptacion al agua y tecnicas basicas de nado', 'Principiante', 10, '2024-06-12 15:00:00', 45, 2);

INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Natacion Nivel Intermedio', 'Mejora de estilos y resistencia en el agua', 'Intermedio', 12, '2024-06-12 16:30:00', 60, 2);

-- Insertar clases para Juan Martínez (Tenis)
INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Tenis Iniciacion', 'Aprender los fundamentos del tenis: saque, golpes basicos', 'Principiante', 8, '2024-06-13 17:00:00', 60, 3);

INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Tenis Competitivo', 'Preparacion para torneoslocales y regionales', 'Avanzado', 6, '2024-06-14 19:00:00', 90, 3);

-- Insertar clases para Ana López (Yoga y Pilates)
INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Yoga Principiantes', 'Iniciacion al yoga, posturas basicas y relajacion', 'Principiante', 20, '2024-06-15 18:00:00', 60, 4);

INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Pilates Fitness', 'Fortalecimiento del core y mejora de la flexibilidad', 'Intermedio', 15, '2024-06-15 19:30:00', 45, 4);

-- Insertar clases para Roberto Díaz (Boxeo)
INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Boxeo Principiante', 'Guardia, movimientos basicos y combinaciones', 'Principiante', 12, '2024-06-16 19:00:00', 75, 5);

INSERT INTO clases (nombre, descripcion, nivel, max_alumnos, horario, duracion_minutos, profesor_id) VALUES 
('Boxeo Avanzado', 'Tecnicas avanzadas, sparring y preparacion fisica', 'Avanzado', 10, '2024-06-16 20:30:00', 90, 5);
