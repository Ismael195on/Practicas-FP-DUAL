import { Routes } from '@angular/router';
import { ListaProfesoresComponent } from './components/lista-profesores.component';
import { DetalleProfessorComponent } from './components/detalle-profesor.component';
import { ListaClasesComponent } from './components/lista-clases.component';
import { HomeComponent } from './pages/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profesores',
    component: ListaProfesoresComponent
  },
  {
    path: 'profesor/:id',
    component: DetalleProfessorComponent
  },
  {
    path: 'profesor/nuevo',
    component: DetalleProfessorComponent
  },
  {
    path: 'clases',
    component: ListaClasesComponent
  },
  {
    path: 'clase/:id',
    component: ListaClasesComponent
  }
];
