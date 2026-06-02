#!/bin/bash

echo "======================================"
echo "Academia de Deportes - Backend Setup"
echo "======================================"

cd backend

echo ""
echo "📦 Instalando dependencias..."
mvn clean install

echo ""
echo "✅ Backend configurado correctamente"
echo ""
echo "Para ejecutar el backend, usa:"
echo "  mvn spring-boot:run"
echo ""
echo "El servidor estará disponible en: http://localhost:8080"
