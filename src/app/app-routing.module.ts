import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'asistencias',
    children:[
      {
        path: '',
        loadChildren: () => import('./asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
      },
      {
        path: ':asistenciaId',
        loadChildren: () => import('./asistencias/detalle-asistencia/detalle-asistencia.module').then( m => m.DetalleAsistenciaPageModule)
      },  
    ]
  },
  {
    path: 'list-profe',
        loadChildren: () => import('./list-profe/list-profe.module').then( m => m.ListProfePageModule)

  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
