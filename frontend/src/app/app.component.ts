import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <h1>🏋️ Academia de Deportes</h1>
        </div>
        <ul class="nav-menu">
          <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
          <li><a routerLink="/profesores" routerLinkActive="active">Profesores</a></li>
          <li><a routerLink="/clases" routerLinkActive="active">Clases</a></li>
        </ul>
      </div>
    </nav>
    
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    
    <footer class="footer">
      <p>© 2024 Academia de Deportes - Proyecto FP Dual</p>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f5f5f5;
    }
    
    .navbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }
    
    .nav-menu {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 30px;
    }
    
    .nav-menu a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 15px 0;
      transition: all 0.3s ease;
      border-bottom: 2px solid transparent;
    }
    
    .nav-menu a:hover,
    .nav-menu a.active {
      border-bottom-color: white;
    }
    
    .main-content {
      flex: 1;
      padding: 20px;
    }
    
    .footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }
    
    .footer p {
      margin: 0;
    }
  `]
})
export class AppComponent {
  title = 'academia-deportes';
}
