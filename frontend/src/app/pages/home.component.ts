import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <div class="hero">
        <h1>Bienvenido a Academia de Deportes</h1>
        <p>Gestión completa de profesores y clases</p>
      </div>
      
      <div class="stats">
        <div class="stat-card">
          <div class="stat-icon">👨‍🏫</div>
          <h3>Profesores</h3>
          <p>Gestiona tu equipo de profesores</p>
          <a routerLink="/profesores" class="btn btn-primary">Ver Profesores</a>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">📚</div>
          <h3>Clases</h3>
          <p>Organiza todas tus clases</p>
          <a routerLink="/clases" class="btn btn-primary">Ver Clases</a>
        </div>
      </div>
      
      <div class="features">
        <h2>Características</h2>
        <ul class="feature-list">
          <li>✅ Gestión de profesores</li>
          <li>✅ Organización de clases</li>
          <li>✅ Relación profesor-clases</li>
          <li>✅ Control de horarios</li>
          <li>✅ Interfaz intuitiva</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    
    .hero {
      text-align: center;
      margin-bottom: 60px;
      color: #333;
    }
    
    .hero h1 {
      font-size: 48px;
      margin: 0 0 20px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero p {
      font-size: 20px;
      color: #666;
      margin: 0;
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
    }
    
    .stat-card {
      background: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    }
    
    .stat-icon {
      font-size: 48px;
      margin-bottom: 15px;
    }
    
    .stat-card h3 {
      color: #333;
      margin: 0 0 10px 0;
      font-size: 24px;
    }
    
    .stat-card p {
      color: #666;
      margin: 0 0 20px 0;
      font-size: 14px;
    }
    
    .btn {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.3s ease;
      font-weight: 600;
    }
    
    .btn:hover {
      background-color: #0056b3;
    }
    
    .features {
      background: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .features h2 {
      color: #333;
      margin: 0 0 30px 0;
      text-align: center;
    }
    
    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .feature-list li {
      color: #333;
      font-size: 16px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 4px;
    }
  `]
})
export class HomeComponent {
}
