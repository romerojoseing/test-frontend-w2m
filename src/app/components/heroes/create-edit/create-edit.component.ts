/* ---------- Modules ---------- */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { nanoid } from 'nanoid'

/* ---------- Service ---------- */
import { HeroService } from "src/app/services/hero.service";

/* ---------- Interface ---------- */
import { Hero } from "src/app/interface/hero.interface";

/* ---------- Angular Material ---------- */
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  /* ---------- Id Hero ---------- */
  id: any;

  /* ---------- Init Hero ---------- */
  hero: Hero = {
    id: '',
    superhero: '',
    name: ''
  };

  heroes: Hero[] = [];

  formHero: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private heroService: HeroService
  ) { 
    /* ---------- Init Form Create ---------- */
    this.formHero = this.fb.group({
      superhero: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    /* ---------- Get Id Hero ---------- */
    this.id = this._route.snapshot.paramMap.get('id');

    if(this.id){
      /* ---------- Init Form Edit ---------- */
      this.hero = this.heroService.getHero(this.id)!;
      this.formHero = this.fb.group({
        superhero: [this.hero.superhero, Validators.required],
        name: [this.hero.name, Validators.required]
      })
    }
  }

  /**
   * Create Hero
   */
  createHero(formHero: Hero){
    formHero.id =  nanoid(),       // Id Generator

    this.heroService.createHero(formHero);
    this.router.navigate(['heroes']);
    this.snackbarCreate();
  }

  /**
   * Update Hero
   */
  updateHero(formHero: Hero){
    formHero.id =  this.hero.id,       // Actual Id

    this.heroService.updateHero(formHero);
    this.router.navigate(['heroes']);
    this.snackbarUpdate();
  }

  /**
   * Snackbar create hero
   */
  snackbarCreate() {
    this._snackBar.open('Superheroe Creado', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  /**
   * Snackbar create hero
   */
   snackbarUpdate() {
    this._snackBar.open('Superheroe Actualizado', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  /**
   * function used only to verify in the tests the change in the array of heroes
   */
  loadHeroesData(){
    this.heroes = this.heroService.getAll();
  }

}
