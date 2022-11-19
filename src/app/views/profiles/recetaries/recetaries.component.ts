import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { showMessageError } from 'src/app/helpers/toastError';
import { Cookbook } from 'src/app/models/cookbook';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { MockCookBooks } from '../../home/data/mock-chefs';
import { DialogRecetariesComponent } from './dialog-recetaries/dialog-recetaries.component';

@Component({
  selector: 'app-recetaries',
  templateUrl: './recetaries.component.html',
  styleUrls: ['./recetaries.component.css'],
})
export class RecetariesComponent implements OnInit {
  
  @Input() profileId: number | undefined = 0;
  constructor(
    private cookbookService: CookbookService,
    private profileService: ProfileService, 
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) {}

  cookbooks : Cookbook[] = []

  ngOnInit(): void {
    this.cookbookService.getAllCookbooksByProfileId(this.profileId).subscribe(
      (cookbooksRes: Cookbook[]) => {
        this.cookbooks = cookbooksRes
        console.log('cookbooks', cookbooksRes)
      },
      (error) => {
        this.cookbooks = MockCookBooks;
        showMessageError(
          this._snackBar,
          'Ha ocurrido un error en al cargar la pagina, refresque'
        );
      }
    )
  }


  goToMyProfile() {
    const myId = this.profileService.getMyProfile();
    if (myId !== null) {
      return `/perfil/${myId}`;
    } else return `/perfil/0`;
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRecetariesComponent, {
      data: {profileId: this.profileId, cookbooks: this.cookbooks},
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      
    });
  }
}
