# 🏋️ Academia de Deportes - Proyecto FP Dual

## Descripción
Aplicación web full stack para la gestión de una academia de deportes, desarrollada como proyecto Final de Ciclo en FP Dual.

Sistema que permite gestionar **profesores** y sus **clases**, con una relación 1:M (Un profesor puede tener muchas clases).

**Autores**: Ismael y Diego
**Fecha**: Junio 2026 
**Centro**: CEIP Virgen de Gracia

---

## 📋 Estructura del Proyecto

```
academia-deportes/
├── backend/                    # API REST en Spring Boot
│   ├── src/main/java/com/academia/
│   │   ├── entity/            # Entidades JPA (Profesor, Clase)
│   │   ├── repository/        # Repositorios
│   │   ├── service/           # Lógica de negocio
│   │   ├── controller/        # Controladores REST
│   │   └── AcademiaApplication.java
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── data.sql           # Datos de ejemplo
│   └── pom.xml
│
├── frontend/                   # Interfaz en Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/    # Componentes (Standalone)
│   │   │   ├── services/      # Servicios Angular
│   │   │   ├── pages/         # Páginas
│   │   │   └── app.component.ts
│   │   ├── main.ts
│   │   └── index.html
│   ├── package.json
│   └── angular.json
│
└── README.md
```

---

## 🚀 Cómo Ejecutar

### Requisitos Previos
- **Java 17+** (para Spring Boot)
- **Node.js 18+** y npm (para Angular)
- **Maven** (para compilar backend)

### Backend (Spring Boot)

```bash
cd backend

# Instalar dependencias y compilar
mvn clean install

# Ejecutar la aplicación
mvn spring-boot:run
```

El backend estará disponible en: `http://localhost:8080`

**Endpoints disponibles:**
- `GET /api/profesores` - Listar todos los profesores
- `GET /api/profesores/{id}` - Obtener un profesor específico
- `POST /api/profesores` - Crear nuevo profesor
- `PUT /api/profesores/{id}` - Actualizar profesor
- `DELETE /api/profesores/{id}` - Eliminar profesor

- `GET /api/clases` - Listar todas las clases
- `GET /api/clases/{id}` - Obtener clase específica
- `GET /api/clases/profesor/{profesorId}` - Obtener clases de un profesor
- `POST /api/clases` - Crear nueva clase
- `PUT /api/clases/{id}` - Actualizar clase
- `DELETE /api/clases/{id}` - Eliminar clase

### Frontend (Angular)

```bash
cd frontend

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm start
```

El frontend estará disponible en: `http://localhost:4200`

---

## 🗄️ Base de Datos

El proyecto usa **H2 Database** en memoria.

**Tablas:**
- `profesores` - Información de profesores
- `clases` - Información de clases

**Relación:** Un profesor puede tener muchas clases (1:M)

Para ver la consola H2, accede a: `http://localhost:8080/h2-console`
- URL: `jdbc:h2:mem:testdb`
- Usuario: `sa`
- Contraseña: (vacía)

---

## ✨ Características Implementadas

### Frontend Angular
- ✅ Componentes Standalone
- ✅ Signals para manejo de estado
- ✅ Formularios reactivos
- ✅ Llamadas a API REST
- ✅ Observables en servicios
- ✅ Enrutamiento básico
- ✅ Interfaz responsive

### Backend Spring Boot
- ✅ API REST funcional
- ✅ Operaciones CRUD
- ✅ Relación 1:M (Profesor-Clases)
- ✅ Base de datos relacional (H2)
- ✅ Validaciones en servicios
- ✅ CORS configurado para desarrollo

---

## 🐛 Problemas Encontrados y Solucionados

### Backend
1. **CORS bloqueando peticiones**: Añadida anotación @CrossOrigin en controladores
2. **Relación 1:M no cargaba clases**: Cambiad `FetchType.LAZY` a `FetchType.EAGER`
3. **Email duplicado en profesores**: Añadida validación en servicio

### Frontend
1. **HttpClientModule no estaba importado**: Añadido en bootstrapApplication
2. **Ruta /clases/profesor/{id} conflictaba**: Movido endpoint a estructura diferente
3. **Formateo de fechas**: Implementado método formatearHorario() en componentes

---

## 📚 Tecnologías Utilizadas

**Backend:**
- Spring Boot 3.3.0
- Spring Data JPA
- H2 Database
- Maven

**Frontend:**
- Angular 21
- TypeScript
- RxJS (Observables)
- Angular Signals

---

## 🔄 Flujo de la Aplicación

1. El usuario accede a la aplicación en Angular
2. Angular realiza peticiones HTTP al backend (Spring Boot)
3. El backend procesa las peticiones contra la BD H2
4. El frontend muestra los datos obtenidos

**Ejemplo: Ver clases de un profesor**
```
Usuario selecciona un profesor → 
Angular hace GET /api/clases/profesor/{id} → 
Backend busca clases en BD → 
Retorna JSON con clases → 
Angular renderiza las clases
```

---

## 📝 Notas para Futuros Desarrolladores

- Los datos de ejemplo se cargan automáticamente al iniciar con data.sql
- Para cambiar puerto del backend: modificar `application.properties`
- Para cambiar URL del API en frontend: revisar `*.service.ts`
- El proyecto está preparado para ampliar con:
  - Autenticación y autorización
  - Paginación de resultados
  - Búsqueda y filtros
  - Edición de registros existentes

---

