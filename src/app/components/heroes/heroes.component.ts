/* ---------- Modules ---------- */
import { Component, OnInit, ViewChild } from '@angular/core';

/* ---------- Service ---------- */
import { HeroService } from "src/app/services/hero.service";

/* ---------- Interface ---------- */
import { Hero } from "src/app/interface/hero.interface";

/* ---------- Component ---------- */
import { HeroDialogComponent } from './hero-dialog/hero-dialog.component';

/* ---------- Angular Material ---------- */
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { filter } from 'rxjs';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  
  /* ---------- Init Heroes Array ---------- */
  heroes: Hero[] = [];
  
  /* ---------- Table settings ---------- */
  dataSource: any;
  displayedColumns: string[] = ['superhero', 'name', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private heroService: HeroService,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadHeroes();
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Load Heroes
   */
  loadHeroes(){
    this.heroes = this.heroService.getAll();
    this.dataSource = new MatTableDataSource(this.heroes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Delete Hero
   * @param id 
   * @returns 
   */  
  deleteHero(id: string){
    this.heroService.deteleHero(id);
    this.loadHeroes();
    this.snackbarDelete();
  }

  /**
   * Dialog confirm deletion
   */
  openDialog(id: string){
    const dialogRef = this._dialog.open( HeroDialogComponent, {
      data: '¿Deseas eliminar el Superheroe?'
    });

    dialogRef.afterClosed()
    .pipe(filter(res => Boolean(res)))
    .subscribe(() => this.deleteHero(id));
  }

  /**
   * Snackbar deleted hero
   */
   snackbarDelete() {
    this._snackBar.open('Superheroe Eliminado', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  /**
   * Table filter
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
