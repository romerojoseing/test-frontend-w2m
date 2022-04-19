/* ---------- Modules ---------- */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* ---------- Components ---------- */
import { HeroesComponent } from './heroes.component';
import { CreateEditComponent } from './create-edit/create-edit.component';

const routes: Routes = [

  /* ---------- Empty Path ---------- */
  { path: '', component: HeroesComponent },

  /* ---------- Create Hero Path ---------- */
  { path: 'create-edit', component: CreateEditComponent },

  /* ---------- Edit Hero Path ---------- */
  { path: 'create-edit/:id', component: CreateEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
