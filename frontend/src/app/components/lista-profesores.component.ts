import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProfesorService, Profesor } from '../services/profesor.service';

@Component({
  selector: 'app-lista-profesores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Profesores</h2>
        <button (click)="irACrear()" class="btn btn-primary">+ Nuevo Profesor</button>
      </div>
      
      <div *ngIf="cargando()" class="loading">
        Cargando profesores...
      </div>
      
      <div *ngIf="!cargando() && profesores().length === 0" class="no-data">
        No hay profesores registrados
      </div>
      
      <div *ngIf="!cargando() && profesores().length > 0" class="tabla-responsiva">
        <table class="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Especialidad</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let profesor of profesores()" [routerLink]="['/profesor', profesor.id]" class="fila-clickeable">
              <td>{{ profesor.nombre }}</td>
              <td>{{ profesor.email }}</td>
              <td>{{ profesor.especialidad }}</td>
              <td>{{ profesor.telefono }}</td>
              <td>
                <button (click)="eliminar(profesor.id!)" class="btn btn-danger btn-small">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1000px;
      margin: 20px auto;
      padding: 20px;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 15px;
    }
    
    .header h2 {
      margin: 0;
      color: #333;
    }
    
    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
    }
    
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    
    .btn-primary:hover {
      background-color: #0056b3;
    }
    
    .btn-danger {
      background-color: #dc3545;
      color: white;
    }
    
    .btn-danger:hover {
      background-color: #c82333;
    }
    
    .btn-small {
      padding: 5px 10px;
      font-size: 12px;
    }
    
    .tabla-responsiva {
      overflow-x: auto;
    }
    
    .tabla {
      width: 100%;
      border-collapse: collapse;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .tabla th {
      background-color: #f8f9fa;
      padding: 12px;
      text-align: left;
      font-weight: 600;
      color: #333;
      border-bottom: 2px solid #dee2e6;
    }
    
    .tabla td {
      padding: 12px;
      border-bottom: 1px solid #dee2e6;
    }
    
    .fila-clickeable {
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .fila-clickeable:hover {
      background-color: #f0f0f0;
    }
    
    .loading, .no-data {
      text-align: center;
      padding: 30px;
      color: #666;
      font-size: 16px;
    }
  `]
})
export class ListaProfesoresComponent implements OnInit {
  
  profesores = signal<Profesor[]>([]);
  cargando = signal(true);
  
  constructor(private profesorService: ProfesorService, private router: Router) {}
  
  ngOnInit(): void {
    this.cargarProfesores();
  }
  
  cargarProfesores(): void {
    this.cargando.set(true);
    this.profesorService.obtenerTodos().subscribe({
      next: (datos) => {
        this.profesores.set(datos);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al cargar profesores:', err);
        this.cargando.set(false);
      }
    });
  }
  
  irACrear(): void {
    this.router.navigate(['/profesor/nuevo']);
  }
  
  eliminar(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este profesor?')) {
      this.profesorService.eliminar(id).subscribe({
        next: () => {
          this.cargarProfesores();
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('Error al eliminar el profesor');
        }
      });
    }
  }
}
