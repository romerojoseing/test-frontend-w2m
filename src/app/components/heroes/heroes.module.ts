/* ---------- Modules ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* ---------- Components ---------- */
import { HeroesComponent } from './heroes.component';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { HeroDialogComponent } from './hero-dialog/hero-dialog.component';


@NgModule({
  declarations: [
    HeroesComponent,
    CreateEditComponent,
    HeroDialogComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule
  ]
})
export class HeroesModule { }
