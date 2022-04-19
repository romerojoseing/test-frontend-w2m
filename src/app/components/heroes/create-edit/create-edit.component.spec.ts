/* ---------- Test Modules ---------- */
import { ComponentFixture, TestBed } from '@angular/core/testing';

/* ---------- Component ---------- */
import { HeroesComponent } from '../heroes.component';
import { CreateEditComponent } from './create-edit.component';

/* ---------- Angular Material ---------- */
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateEditComponent', () => {
  let component: CreateEditComponent;
  let fixture: ComponentFixture<CreateEditComponent>;

  /* ---------- Dependencies ---------- */
  let snackSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {

    snackSpy = jasmine.createSpyObj<MatSnackBar>('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ CreateEditComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'heroes', component: HeroesComponent}
        ])
      ],
      providers: [
        { provide: MatSnackBar, useValue: snackSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* ---------- Check component create/edit ---------- */
  it('Check component create/edit', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(CreateEditComponent);
    expect(component.id).toBeDefined();
    expect(component.heroes).toBeDefined();
  });

  /* ---------- Check function create hero ---------- */
  it('Check function create hero', () => {
    const hero = {
      "id": "mJJn9ipL0lekzLdFx0vxx",
      "superhero": "Zeus",
      "name": "Dios"
    }
    component.loadHeroesData(); 
    let heroesLength = component.heroes.length; 
    component.createHero(hero);
    expect(component.heroes.length).toBeGreaterThan(heroesLength);
  });

  /* ---------- Check function edit hero ---------- */
  it('Check function edit hero', () => {
    const hero = {
      "id": "9sEeBr5aHi7g74jjgLuOq",
      "superhero": "Batman del Futuro",
      "name": "Bruce Gotic"
    }
    component.loadHeroesData(); 
    let heroesLength = component.heroes.length; 
    component.updateHero(hero);
    expect(component.heroes.length).toEqual(heroesLength);
  });
});
