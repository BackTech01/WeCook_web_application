import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-recetaries',
  templateUrl: './dialog-recetaries.component.html',
  styleUrls: ['./dialog-recetaries.component.css'],
})
export class DialogRecetariesComponent implements OnInit {
  name: string = '';
  constructor(
    public dialogRef: MatDialogRef<DialogRecetariesComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
