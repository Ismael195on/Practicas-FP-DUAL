# 📖 Guía de Instalación

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

1. **Java Development Kit (JDK) 17 o superior**
   ```bash
   java -version
   ```

2. **Maven** (para compilar el backend)
   ```bash
   mvn -version
   ```

3. **Node.js 18+ y npm**
   ```bash
   node -version
   npm -version
   ```

4. **Angular CLI (opcional, pero recomendado)**
   ```bash
   npm install -g @angular/cli
   ```

---

## 🚀 Instalación Paso a Paso

### Paso 1: Clonar o descargar el proyecto

```bash
git clone <url-repositorio>
cd academia-deportes
```

### Paso 2: Instalar el Backend

```bash
cd backend

# Opción 1: Con Maven
mvn clean install
mvn spring-boot:run

# Opción 2: Usando el script
bash ../setup-backend.sh
mvn spring-boot:run
```

El backend estará listo en `http://localhost:8080`

**Verificar que funciona:**
```bash
curl http://localhost:8080/api/profesores
```

### Paso 3: Instalar el Frontend (en otra terminal)

```bash
cd frontend

# Opción 1: Con npm
npm install
npm start

# Opción 2: Con Angular CLI
ng serve
```

El frontend estará listo en `http://localhost:4200`

---

## ✅ Verificación

1. **Backend corriendo**: `http://localhost:8080/h2-console`
   - Usuario: `sa`
   - Contraseña: (vacía)

2. **Frontend corriendo**: `http://localhost:4200`
   - Deberías ver la página de inicio

3. **Datos de ejemplo**: Los datos se cargan automáticamente al iniciar el backend

---

## 🐛 Problemas Comunes

### "Java no encontrado"
```bash
# Instalar JDK 17+
# En Windows: descargar de oracle.com
# En Linux: sudo apt install openjdk-17-jdk
# En Mac: brew install java
```

### "mvn: command not found"
```bash
# Instalar Maven
# https://maven.apache.org/download.cgi
# Añadir a PATH
```

### "npm ERR! permission denied"
```bash
# Solución
sudo chown -R $(whoami) ~/.npm
```

### "Port 8080 already in use"
```bash
# Cambiar puerto en backend/src/main/resources/application.properties
# server.port=9090
```

### "Port 4200 already in use"
```bash
# Ejecutar Angular en otro puerto
ng serve --port 4300
```

---

## 📝 Próximos Pasos

Una vez instalado:

1. Ir a `http://localhost:4200`
2. Explorar la sección de **Profesores**
3. Ver los **Detalles** de un profesor (verás sus clases)
4. Ir a la sección de **Clases**

---

## 💾 Datos de Ejemplo

El backend carga automáticamente 5 profesores con sus clases:

- **Carlos García López** - Fútbol (3 clases)
- **María Rodríguez Pérez** - Natación (2 clases)
- **Juan Martínez Santos** - Tenis (2 clases)
- **Ana López Fernández** - Yoga y Pilates (2 clases)
- **Roberto Díaz Moreno** - Boxeo (2 clases)

---

¿Necesitas ayuda? Revisa el README.md principal o contacta con los autores.
