# Backend - Academia de Deportes API

API REST desarrollada con Spring Boot para gestionar profesores y clases.

## Estructura

```
backend/
├── src/main/java/com/academia/
│   ├── AcademiaApplication.java       # Clase principal
│   ├── controller/
│   │   ├── ProfesorController.java    # Endpoints de profesores
│   │   └── ClaseController.java       # Endpoints de clases
│   ├── entity/
│   │   ├── Profesor.java              # Entidad profesor
│   │   └── Clase.java                 # Entidad clase
│   ├── repository/
│   │   ├── ProfesorRepository.java    # CRUD profesores
│   │   └── ClaseRepository.java       # CRUD clases
│   └── service/
│       ├── ProfesorService.java       # Lógica profesores
│       └── ClaseService.java          # Lógica clases
└── src/main/resources/
    ├── application.properties          # Configuración
    └── data.sql                        # Datos iniciales
```

## Entidades

### Profesor
```java
{
  "id": 1,
  "nombre": "Carlos García López",
  "email": "carlos.garcia@academia.com",
  "especialidad": "Fútbol",
  "telefono": "654321098"
}
```

### Clase
```java
{
  "id": 1,
  "nombre": "Fútbol Base",
  "descripcion": "Iniciación al futbol, técnicas básicas",
  "nivel": "Principiante",
  "maxAlumnos": 15,
  "horario": "2024-06-10T16:00:00",
  "duracionMinutos": 60,
  "profesor": { ... }
}
```

## Endpoints

### Profesores

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/profesores` | Listar todos |
| GET | `/api/profesores/{id}` | Obtener por ID |
| POST | `/api/profesores` | Crear nuevo |
| PUT | `/api/profesores/{id}` | Actualizar |
| DELETE | `/api/profesores/{id}` | Eliminar |

### Clases

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/clases` | Listar todas |
| GET | `/api/clases/{id}` | Obtener por ID |
| GET | `/api/clases/profesor/{profesorId}` | Obtener por profesor |
| POST | `/api/clases` | Crear nueva |
| PUT | `/api/clases/{id}` | Actualizar |
| DELETE | `/api/clases/{id}` | Eliminar |

## Instalación

```bash
# Instalar dependencias
mvn clean install

# Ejecutar
mvn spring-boot:run
```

## Configuración

**application.properties:**
- `server.port`: Puerto del servidor (8080 por defecto)
- `spring.datasource.url`: URL de la BD H2
- `spring.jpa.hibernate.ddl-auto`: Estrategia de creación (create-drop)

## Validaciones

- **Email de profesor**: Requerido y único
- **Nombre de clase**: Requerido
- **Profesor de clase**: Debe existir en la BD
- **Relación 1:M**: Un profesor puede tener muchas clases

## Manejo de Errores

- `400 Bad Request`: Datos inválidos
- `404 Not Found`: Recurso no existe
- `201 Created`: Creación exitosa
- `204 No Content`: Eliminación exitosa

## CORS

Configurado para aceptar peticiones desde `http://localhost:4200` (Angular)

---

Desarrollado por: David López García  
Fecha: Junio 2024
