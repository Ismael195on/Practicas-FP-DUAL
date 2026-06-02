import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Clase {
  id?: number;
  nombre: string;
  descripcion: string;
  nivel: string;
  maxAlumnos: number;
  horario: string;
  duracionMinutos: number;
  profesor: any;
}

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  
  private apiUrl = 'http://localhost:8080/api/clases';
  
  constructor(private http: HttpClient) { }
  
  obtenerTodas(): Observable<Clase[]> {
    return this.http.get<Clase[]>(this.apiUrl);
  }
  
  obtenerPorId(id: number): Observable<Clase> {
    return this.http.get<Clase>(`${this.apiUrl}/${id}`);
  }
  
  // Obtener clases de un profesor especifico
  obtenerPorProfesor(profesorId: number): Observable<Clase[]> {
    return this.http.get<Clase[]>(`${this.apiUrl}/profesor/${profesorId}`);
  }
  
  crear(clase: Clase): Observable<Clase> {
    return this.http.post<Clase>(this.apiUrl, clase);
  }
  
  actualizar(id: number, clase: Clase): Observable<Clase> {
    return this.http.put<Clase>(`${this.apiUrl}/${id}`, clase);
  }
  
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
