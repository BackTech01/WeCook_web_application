import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { showMessageError } from 'src/app/helpers/toastError';
import { UserResponse } from 'src/app/models/user';
import { UserProfile } from 'src/app/models/userProfile';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  errorMessage = false;
  loading = false;

  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    //gender: M | F
    gender: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),

    birthdate: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    profilePictureUrl: new FormControl('', Validators.required),
  });

  constructor(
    private signupService: SignupService,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSignup(signupForm: FormGroup) {
    if (signupForm.valid) {
      this.errorMessage = false;
    } else {
      this.errorMessage = true;
    }

    console.log({
      email: signupForm.value.username,
      password: signupForm.value.password,
    });

    this.signupService
      .createUser({
        email: signupForm.value.username,
        password: signupForm.value.password,
      })
      .subscribe(
        (res: UserResponse) => {
          this.createProfileUser(res.id || 0, {
            name: signupForm.value.name,
            gender: signupForm.value.gender,
            birthdate: (signupForm.value.birthdate as Date).toISOString(),
            dni: signupForm.value.dni,
            subscribersPrice: 0,
            subsOn: true,
            tipsOn: true,
            profilePictureUrl: signupForm.value.profilePictureUrl,
          });
        },

        (error) => {
          this.loading = false;
          showMessageError(
            this._snackBar,
            'Ha ocurrido un error en el servicio, intente de nuevo'
          );
        }
      );
  }

  private createProfileUser(id: number, userProfile: UserProfile) {
    this.signupService.createProfileByUserId(id, userProfile).subscribe(
      (res: any) => {
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        showMessageError(
          this._snackBar,
          'Ha ocurrido un error en el servicio, intente de nuevo'
        );
      }
    );
  }
}
