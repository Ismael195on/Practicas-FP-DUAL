import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Profesor {
  id?: number;
  nombre: string;
  email: string;
  especialidad: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  
  private apiUrl = 'http://localhost:8080/api/profesores';
  
  constructor(private http: HttpClient) { }
  
  obtenerTodos(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.apiUrl);
  }
  
  obtenerPorId(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(`${this.apiUrl}/${id}`);
  }
  
  crear(profesor: Profesor): Observable<Profesor> {
    return this.http.post<Profesor>(this.apiUrl, profesor);
  }
  
  actualizar(id: number, profesor: Profesor): Observable<Profesor> {
    return this.http.put<Profesor>(`${this.apiUrl}/${id}`, profesor);
  }
  
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
