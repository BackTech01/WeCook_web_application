import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { showMessageError } from 'src/app/helpers/toastError';
import { Cookbook } from 'src/app/models/cookbook';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { MockCookBooks } from 'src/app/views/home/data/mock-chefs';

@Component({
  selector: 'app-dialog-recetaries',
  templateUrl: './dialog-recetaries.component.html',
  styleUrls: ['./dialog-recetaries.component.css'],
})
export class DialogRecetariesComponent implements OnInit {
  name: string = '';
    loading= false
  constructor(
    private cookbookService: CookbookService,
    private _snackBar: MatSnackBar,

    public dialogRef: MatDialogRef<DialogRecetariesComponent>, // 
    @Inject(MAT_DIALOG_DATA) public data: {profileId: number},
  ) {}

  cookbookUpdate?: Cookbook
  errorMessage = false;
  recetarioForm = new FormGroup({
    cookbookName: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
      
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(coobookFrom: FormGroup): void {

    if (!coobookFrom.valid) {
      this.errorMessage = true;
      return;
    }
    
    this.cookbookService.createCookbook(this.data.profileId, 
      {name: coobookFrom.value.cookbookName,
      profileId: this.data.profileId})
      .subscribe((cookbook) => {
        
        this.onCreatePart2(cookbook.id);
        
      
      console.log(cookbook.id, this.data.profileId)
      
        

      },
        (error) => {
          showMessageError(
            this._snackBar,
            'Ha ocurrido un error en el servicio, No se pudo guardar el recetario, intentelo de nuevo'
            );
            this.loading = false;
            console.log('ERROR', error);
            console.log( this.data.profileId, coobookFrom.value.cookbookName)
          }
            
      );
      
    this.dialogRef.close();
    
    console.log(this.data.profileId)
  }


  private onCreatePart2 (cookbookId: number) {
    this.cookbookService.createCookbookpart2(cookbookId).subscribe(
      (cookbook) => {
        this.loading=false
      },
      (error) => {
        this.loading = false;
        showMessageError(
          this._snackBar,
          'Ha ocurrido un error en el servicio, intente de nuevo'
        );
      }
    )
  }


}
