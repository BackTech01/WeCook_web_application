import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { UserResponse } from 'src/app/models/user';
import { showMessageError } from 'src/app/helpers/toastError';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage = false;
  isActive = true;
  loading = false;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onLogin(userLogin: FormGroup) {
    if (!userLogin.valid) {
      this.errorMessage = true;
      return;
    }

    this.loading = !this.loading;

    this.userService.login(userLogin.value).subscribe(
      (res: UserResponse) => {
        this.loading = !this.loading;
        localStorage.setItem('userId', res.id?.toString() || '0');
        // let userLogged: User = data;
        // if (userLogged != null) {
        //   localStorage.setItem('userLogged', userLogged.id.toString());
           this.router.navigate(['inicio']);
        // } else {
        //   this.errorMessage = true;
        // }
      },
      (error) => {
        this.loading = !this.loading;
        showMessageError(
          this._snackBar,
          'Ha ocurrido un error en el servicio, intente de nuevo'
        );
      }
    );
  }


  
}
