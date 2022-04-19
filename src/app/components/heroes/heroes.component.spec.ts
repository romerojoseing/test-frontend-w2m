/* ---------- Test Modules ---------- */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

/* ---------- Component ---------- */
import { HeroesComponent } from './heroes.component';
import { CreateEditComponent } from './create-edit/create-edit.component';

/* ---------- Angular Material ---------- */
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  /* ---------- Dependencies ---------- */
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let snackSpy: jasmine.SpyObj<MatSnackBar>;
  let pagSpy: jasmine.SpyObj<MatPaginator>;

  beforeEach(async () => {

    dialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
    snackSpy = jasmine.createSpyObj<MatSnackBar>('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ,CreateEditComponent ],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: MatSnackBar, useValue: snackSpy },
        { provide: MatPaginator, useValue: pagSpy}
      ],
      imports:[
        RouterTestingModule.withRoutes([
          { path: 'heroes/create-edit', component: CreateEditComponent}
        ])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* ---------- Check component load and data ---------- */
  it('Check component heroes', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(HeroesComponent);
    expect(component.heroes).toBeDefined();
    expect(component.heroes.length).not.toBe(0);
  });

  /* ---------- Check modal delete hero ---------- */
  it('Check modal delete heroes', () => {
    const dialogRef = { afterClosed: () => of(true) } as MatDialogRef<unknown>
    dialogSpy.open.and.returnValue(dialogRef);
    component.openDialog('9sEeBr5aHi7g74jjgLuOq');
    expect(dialogSpy.open).toHaveBeenCalled();
  });

  /* ---------- Check function delete hero ---------- */
  it('Check function delete heroes', () => {
    let heroesLength = component.heroes.length;
    component.deleteHero('9sEeBr5aHi7g74jjgLuOq');
    expect(component.heroes.length).toBeLessThan(heroesLength);
  });
});
