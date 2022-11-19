import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Recipe } from 'src/app/models/recipe';
import { showMessageError } from 'src/app/helpers/toastError';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  profileReceipts: Recipe[] = [];
  profile: Profile = {
    birthdate: new Date().toISOString(),
    dni: 123456789,
    gender: 'M',
    id: 45353465,
    name: 'John End',
    profilePictureUrl:
      'https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-hand-drawn-chef-meal-illustration-paintedchefduan-riceillustrationhand-dish-png-image_601589.jpg',
  };
  constructor(
    private router: Router,
    private profileService: ProfileService,
    private receiptService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProfileById();
  }

  loadProfileById(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        let id = params['id'];
        if (id != null) {
          this.profileService.getProfileById(id).subscribe((profile) => {
            this.profile = profile;
            this.profile.profilePictureUrl = 'data:image/jpeg;base64,'+this.profile.profilePictureUrl
            this.loadReceiptsByProfileId(id);
          });
        }
      },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }

  loadReceiptsByProfileId(profileId: number) {
    this.receiptService.getRecipesByProfileId(profileId).subscribe(
      (res: Recipe[]) => {
        this.profileReceipts = res;
      },
      (error) => {
        showMessageError(
          this._snackBar,
          'Ha ocurrido un error en el servicio, intente de nuevo'
        );
      }
    );
  }

  getProfileId() {
    let myId = 0;
    this.activatedRoute.params.subscribe(
      (params) => {
        //console.log('First');
        let id = params['id'];
        if (id != null) {
          myId = +id;
        }
      },
      (error) => {
        myId = 0;
      }
    );
    //console.log('second');
    return myId;
  }
}
