import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '', //url
    loadChildren: () => import('./paginas/principal/principal.module').then( m => m.PrincipalPageModule )
  },

  {
    path: 'categoria', //url
    loadChildren: () => import('./paginas/categoria/categoria.module').then( m => m.CategoriaPageModule )
  },
  {
    path: 'artistas', //url
    loadChildren: () => import('./paginas/artistas/artistas.module').then( m => m.ArtistasPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./paginas/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
