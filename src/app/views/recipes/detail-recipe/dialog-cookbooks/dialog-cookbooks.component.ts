import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { showMessageError } from 'src/app/helpers/toastError';
import { Cookbook } from 'src/app/models/cookbook';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { MockCookBooks } from 'src/app/views/home/data/mock-chefs';

@Component({
  selector: 'app-dialog-cookbooks',
  templateUrl: './dialog-cookbooks.component.html',
  styleUrls: ['./dialog-cookbooks.component.css']
})
export class DialogCookbooksComponent implements OnInit {
  name: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private cookbookService: CookbookService,
    private profileService: ProfileService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogCookbooksComponent>, // 
    @Inject(MAT_DIALOG_DATA) public data: {recipeId: number},
  ) {}

  selectedValue: string = 'No seleccionó ninguno';
  cookbooks: Cookbook[] = []
  userId = localStorage.getItem('userId');
  cookbookControl = new FormControl()
  ngOnInit(): void {
    this.loadCookbooksByProfileId();
    
  }

  loadCookbooksByProfileId(): void {

    const myId = this.profileService.getMyProfile();
    
      this.cookbookService.getAllCookbooksByProfileId(myId).subscribe((cookbooks) => {
        this.cookbooks = cookbooks;
        //this.profile.profilePictureUrl = 'data:image/jpeg;base64,'+this.profile.profilePictureUrl
      },
       (error) => {
        this.cookbooks = MockCookBooks;
      }

      );
  }


  saveRecipeInCookbook(cookbookId: number) {
    
    console.log(this.data.recipeId)
        
      
  this.cookbookService.assignRecipeToCookbook(this.data.recipeId, cookbookId).subscribe((cookbook) => {

    console.log(cookbookId, this.data.recipeId, "La receta se guardó existosamente en el recetario escogido")
    this.dialogRef.close();
    },
      (error) => {
        showMessageError(
          this._snackBar,
          'Ha ocurrido un error en el servicio, No se pudo guardar la receta, intentelo de nuevo'
          );
          console.log('ERROR', error);
          console.log(cookbookId, this.data.recipeId)
          this.dialogRef.close();
        }
          
    );
        
      
  
      
    
        
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
