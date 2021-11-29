import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'asistencias',
        children:[
          {
            path: '',
            loadChildren: () => import('../asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
          },
          {
            path: ':asistenciaId',
            loadChildren: () => import('../asistencias/detalle-asistencia/detalle-asistencia.module').then( m => m.DetalleAsistenciaPageModule)
          },  
        ]
      },
      {
        path: 'list-profe',
            loadChildren: () => import('../list-profe/list-profe.module').then( m => m.ListProfePageModule)
    
      },
      {
        path: 'maps',
        loadChildren: () => import('../maps/maps.module').then( m => m.MapsPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then( m => m.MapPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
