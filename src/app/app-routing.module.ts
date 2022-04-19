/* ---------- Modules ---------- */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  /* ---------- Empty Path ---------- */
  { path: '', redirectTo: 'heroes' , pathMatch: 'full' },

  /* ---------- Heroes Path ---------- */
  {
    path: 'heroes', 
    loadChildren: () => import('src/app/components/heroes/heroes.module')
    .then(m => m.HeroesModule)
  },

  /* ---------- Error Path ---------- */
  {
    path: 'error', 
    loadChildren: () => import('src/app/components/error/error.module')
    .then(m => m.ErrorModule)
  },

  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
