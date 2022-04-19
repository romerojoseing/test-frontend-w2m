/* ---------- Test Modules ---------- */
import { TestBed } from '@angular/core/testing';

/* ---------- Service ---------- */
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  /* ---------- Check service Get all Heroes ---------- */
  it('Check service function GET ALL heroes', () => {
    let heroes = service.getAll();
    expect(heroes.length).not.toBe(0);
  });

  /* ---------- Check service Get one Heroes ---------- */
  it('Check service function GET ONE heroes', () => {
    let hero = service.getHero('9sEeBr5aHi7g74jjgLuOq');
    expect(hero?.id).toBe('9sEeBr5aHi7g74jjgLuOq')
    expect(hero?.superhero).toBe('Batman')
    expect(hero?.name).toBe('Bruce Wayne')
  });

  /* ---------- Check function create hero ---------- */
  it('Check service function CREATE hero', () => {
    const hero = {
      "id": "mJJn9ipL0lekzLdFx0vxx",
      "superhero": "Zeus",
      "name": "Dios"
    }
    let heroesLength = service.heroes.length; 
    service.createHero(hero);
    expect(service.heroes.length).toBeGreaterThan(heroesLength);
  });

  /* ---------- Check function edit hero ---------- */
  it('Check service function edit hero', () => {
    const hero = {
      "id": "9sEeBr5aHi7g74jjgLuOq",
      "superhero": "Batman del Futuro",
      "name": "Bruce Gotic"
    }
    let heroesLength = service.heroes.length; 
    service.updateHero(hero);
    expect(service.heroes.length).toEqual(heroesLength);
  });

  /* ---------- Check function delete hero ---------- */
  it('Check service function DELETE heroes', () => {
    let heroesLength = service.heroes.length;
    service.deteleHero('9sEeBr5aHi7g74jjgLuOq');
    expect(service.heroes.length).toBeLessThan(heroesLength);
  });
});
