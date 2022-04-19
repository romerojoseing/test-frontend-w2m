/* ---------- Imports ---------- */
import { Injectable } from '@angular/core';

/* ---------- Interface ---------- */
import { Hero } from "src/app/interface/hero.interface";

/* ---------- Data - Heroes ---------- */
import { Heroes } from 'src/assets/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /* ---------- Init Heroes Array ---------- */
  heroes: Hero[] = Heroes;

  constructor() { }

  /**
   * Get All Heroes
   */
  getAll(){
    return this.heroes;
  }

  /**
   * Get Hero
   * @param id 
   * @returns 
   */
  getHero(id: string){
    return this.heroes.find(x => x.id == id);
  }

  /**
   * Create Hero
   * @param hero 
   * @returns 
   */
  createHero(hero: Hero){
    this.heroes.unshift(hero);    // Agregar al inicio del Array
  }

  /**
   * Update hero
   * @param hero 
   * @returns 
   */
  updateHero(hero: Hero){
    this.heroes = this.heroes.map(x => x.id === hero.id
        ? { ...x, superhero: hero.superhero, name: hero.name }
        : x
    );
  }

  /**
   * Delete Hero
   * @param id 
   * @returns 
   */
  deteleHero(id: string){
    this.heroes = this.heroes.filter(x => x.id != id);   
  }
}
