import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRecetariesComponent } from './dialog-recetaries/dialog-recetaries.component';

@Component({
  selector: 'app-recetaries',
  templateUrl: './recetaries.component.html',
  styleUrls: ['./recetaries.component.css'],
})
export class RecetariesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRecetariesComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
