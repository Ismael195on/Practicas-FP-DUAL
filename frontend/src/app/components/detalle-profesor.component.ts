import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ProfesorService, Profesor } from '../services/profesor.service';
import { ClaseService, Clase } from '../services/clase.service';

@Component({
  selector: 'app-detalle-profesor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <button (click)="volver()" class="btn btn-secondary">← Volver</button>
      
      <div *ngIf="cargando()" class="loading">
        Cargando...
      </div>
      
      <div *ngIf="!cargando() && profesor()" class="detalle-card">
        <div class="profesor-info">
          <h2>{{ profesor()?.nombre }}</h2>
          <div class="info-grid">
            <div class="info-item">
              <label>Email:</label>
              <p>{{ profesor()?.email }}</p>
            </div>
            <div class="info-item">
              <label>Especialidad:</label>
              <p>{{ profesor()?.especialidad }}</p>
            </div>
            <div class="info-item">
              <label>Teléfono:</label>
              <p>{{ profesor()?.telefono }}</p>
            </div>
          </div>
          
          <div class="botones">
            <button [routerLink]="['/profesor/editar', profesor()?.id]" class="btn btn-primary">Editar</button>
          </div>
        </div>
        
        <div class="clases-section">
          <h3>Clases de {{ profesor()?.nombre }}</h3>
          
          <div *ngIf="clases().length === 0" class="no-clases">
            Este profesor aún no tiene clases asignadas
          </div>
          
          <div *ngIf="clases().length > 0" class="clases-grid">
            <div *ngFor="let clase of clases()" class="clase-card">
              <h4>{{ clase.nombre }}</h4>
              <p class="nivel" [class.principiante]="clase.nivel === 'Principiante'" 
                 [class.intermedio]="clase.nivel === 'Intermedio'"
                 [class.avanzado]="clase.nivel === 'Avanzado'">
                {{ clase.nivel }}
              </p>
              <p class="descripcion">{{ clase.descripcion }}</p>
              <div class="clase-detalles">
                <span>👥 {{ clase.maxAlumnos }} alumnos</span>
                <span>⏱️ {{ clase.duracionMinutos }} min</span>
              </div>
              <p class="horario">📅 {{ formatearHorario(clase.horario) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1000px;
      margin: 20px auto;
      padding: 20px;
    }
    
    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
      margin-bottom: 20px;
    }
    
    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }
    
    .btn-secondary:hover {
      background-color: #5a6268;
    }
    
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    
    .btn-primary:hover {
      background-color: #0056b3;
    }
    
    .detalle-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      padding: 30px;
    }
    
    .profesor-info h2 {
      color: #333;
      margin-bottom: 20px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 15px;
    }
    
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    
    .info-item label {
      font-weight: 600;
      color: #666;
      display: block;
      margin-bottom: 5px;
    }
    
    .info-item p {
      margin: 0;
      color: #333;
      font-size: 16px;
    }
    
    .botones {
      margin-top: 20px;
    }
    
    .clases-section {
      margin-top: 40px;
      border-top: 2px solid #eee;
      padding-top: 30px;
    }
    
    .clases-section h3 {
      color: #333;
      margin-bottom: 20px;
    }
    
    .no-clases {
      text-align: center;
      padding: 20px;
      color: #999;
      font-style: italic;
    }
    
    .clases-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
    
    .clase-card {
      background: #f8f9fa;
      border-left: 4px solid #007bff;
      padding: 15px;
      border-radius: 4px;
      transition: transform 0.3s ease;
    }
    
    .clase-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .clase-card h4 {
      margin: 0 0 10px 0;
      color: #333;
    }
    
    .nivel {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 10px;
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
      font-size: 14px;
      color: #666;
      margin: 10px 0;
    }
    
    .clase-detalles {
      display: flex;
      gap: 15px;
      font-size: 13px;
      margin: 10px 0;
    }
    
    .horario {
      margin: 10px 0 0 0;
      font-size: 13px;
      color: #555;
    }
    
    .loading {
      text-align: center;
      padding: 40px;
      color: #666;
    }
  `]
})
export class DetalleProfessorComponent implements OnInit {
  
  profesor = signal<Profesor | null>(null);
  clases = signal<Clase[]>([]);
  cargando = signal(true);
  
  constructor(
    private route: ActivatedRoute,
    private profesorService: ProfesorService,
    private claseService: ClaseService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.cargarProfesor(id);
      this.cargarClases(id);
    });
  }
  
  cargarProfesor(id: number): void {
    this.profesorService.obtenerPorId(id).subscribe({
      next: (profesor) => {
        this.profesor.set(profesor);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error:', err);
        this.cargando.set(false);
      }
    });
  }
  
  cargarClases(profesorId: number): void {
    this.claseService.obtenerPorProfesor(profesorId).subscribe({
      next: (clases) => {
        this.clases.set(clases);
      },
      error: (err) => {
        console.error('Error al cargar clases:', err);
      }
    });
  }
  
  formatearHorario(horario: string): string {
    const fecha = new Date(horario);
    return fecha.toLocaleDateString() + ' ' + fecha.toLocaleTimeString();
  }
  
  volver(): void {
    this.router.navigate(['/profesores']);
  }
}
