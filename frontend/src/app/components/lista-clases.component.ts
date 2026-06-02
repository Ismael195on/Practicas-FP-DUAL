import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ClaseService, Clase } from '../services/clase.service';

@Component({
  selector: 'app-lista-clases',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Clases</h2>
        <button (click)="irACrear()" class="btn btn-primary">+ Nueva Clase</button>
      </div>
      
      <div *ngIf="cargando()" class="loading">
        Cargando clases...
      </div>
      
      <div *ngIf="!cargando() && clases().length === 0" class="no-data">
        No hay clases registradas
      </div>
      
      <div *ngIf="!cargando() && clases().length > 0" class="clases-grid">
        <div *ngFor="let clase of clases()" class="clase-card" (click)="verDetalle(clase.id!)">
          <div class="clase-header">
            <h3>{{ clase.nombre }}</h3>
            <span class="nivel" [class.principiante]="clase.nivel === 'Principiante'" 
                  [class.intermedio]="clase.nivel === 'Intermedio'"
                  [class.avanzado]="clase.nivel === 'Avanzado'">
              {{ clase.nivel }}
            </span>
          </div>
          
          <p class="descripcion">{{ clase.descripcion }}</p>
          
          <div class="profesor-info">
            <strong>Profesor:</strong> {{ clase.profesor?.nombre || 'Sin asignar' }}
          </div>
          
          <div class="clase-detalles">
            <div class="detalle-item">
              <span class="label">Alumnos:</span>
              <span class="valor">{{ clase.maxAlumnos }}</span>
            </div>
            <div class="detalle-item">
              <span class="label">Duración:</span>
              <span class="valor">{{ clase.duracionMinutos }} min</span>
            </div>
          </div>
          
          <p class="horario">{{ formatearHorario(clase.horario) }}</p>
          
          <div class="clase-acciones">
            <button (click)="eliminar($event, clase.id!)" class="btn btn-danger btn-small">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
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
    
    .clases-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }
    
    .clase-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      padding: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .clase-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    }
    
    .clase-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    
    .clase-header h3 {
      margin: 0;
      color: #333;
      flex: 1;
    }
    
    .nivel {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      margin-left: 10px;
    }
    
    .nivel.principiante {
      background-color: #d4edda;
      color: #155724;
    }
    
    .nivel.intermedio {
      background-color: #fff3cd;
      color: #856404;
    }
    
    .nivel.avanzado {
      background-color: #f8d7da;
      color: #721c24;
    }
    
    .descripcion {
      color: #666;
      font-size: 14px;
      margin: 10px 0;
      line-height: 1.5;
    }
    
    .profesor-info {
      background-color: #f0f0f0;
      padding: 8px;
      border-radius: 4px;
      font-size: 13px;
      margin: 10px 0;
    }
    
    .profesor-info strong {
      color: #333;
    }
    
    .clase-detalles {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin: 10px 0;
    }
    
    .detalle-item {
      display: flex;
      flex-direction: column;
      font-size: 13px;
    }
    
    .detalle-item .label {
      color: #999;
      margin-bottom: 3px;
    }
    
    .detalle-item .valor {
      font-weight: 600;
      color: #333;
    }
    
    .horario {
      font-size: 12px;
      color: #999;
      margin: 10px 0;
    }
    
    .clase-acciones {
      margin-top: 15px;
      border-top: 1px solid #eee;
      padding-top: 10px;
    }
    
    .loading, .no-data {
      text-align: center;
      padding: 40px;
      color: #666;
      font-size: 16px;
    }
  `]
})
export class ListaClasesComponent implements OnInit {
  
  clases = signal<Clase[]>([]);
  cargando = signal(true);
  
  constructor(private claseService: ClaseService, private router: Router) {}
  
  ngOnInit(): void {
    this.cargarClases();
  }
  
  cargarClases(): void {
    this.cargando.set(true);
    this.claseService.obtenerTodas().subscribe({
      next: (datos) => {
        this.clases.set(datos);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error:', err);
        this.cargando.set(false);
      }
    });
  }
  
  formatearHorario(horario: string): string {
    const fecha = new Date(horario);
    return fecha.toLocaleDateString() + ' a las ' + fecha.toLocaleTimeString();
  }
  
  irACrear(): void {
    this.router.navigate(['/clase/nueva']);
  }
  
  verDetalle(id: number): void {
    this.router.navigate(['/clase', id]);
  }
  
  eliminar(event: Event, id: number): void {
    event.stopPropagation();
    if (confirm('¿Desea eliminar esta clase?')) {
      this.claseService.eliminar(id).subscribe({
        next: () => {
          this.cargarClases();
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Error al eliminar');
        }
      });
    }
  }
}
