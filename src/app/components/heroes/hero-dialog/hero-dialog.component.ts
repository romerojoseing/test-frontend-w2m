/* ---------- Modules ---------- */
import { Component, OnInit, Inject } from '@angular/core';

/* ---------- Angular Material ---------- */
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-dialog',
  templateUrl: './hero-dialog.component.html',
  styleUrls: ['./hero-dialog.component.scss']
})
export class HeroDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  /**
   * Cancel delete hero
   */
  cancelDelete(): void{
    this.dialogRef.close();
  }

}
