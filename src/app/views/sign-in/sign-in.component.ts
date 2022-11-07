import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  
  @ViewChild('signInNgForm') signInNgForm!: NgForm;
  
  signInForm!: FormGroup;
  constructor(private signInService: SignInService,
    private _formBuilder: FormBuilder,
    private _router: Router) { }

    showAlert: boolean = false;
  /**
     * On init
     */
   ngOnInit(): void {
    // Create the form
    this.signInForm = this._formBuilder.group({
        email: ['hughes.brian@company.com', [Validators.required, Validators.email]],
        password: ['admin', Validators.required],
    });
}

// -----------------------------------------------------------------------------------------------------
// @ Public methods
// -----------------------------------------------------------------------------------------------------

/**
 * Sign in
 */
signIn(): void {
    // Return if the form is invalid
    if (this.signInForm.invalid) {
        return;
    }

    // Disable the form
    this.signInForm.disable();

    

    // Sign in
    this.signInService.signIn(this.signInForm.value).subscribe(
        () => {
            // Set the redirect url.
            // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
            // to the correct page after a successful sign in. This way, that url can be set via
            // routing file and we don't have to touch here.
            // const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
            const redirectURL = 'admin/home';
            console.log('redirect');
            // Navigate to the redirect url
            this._router.navigateByUrl(redirectURL);
        },
        () => {
            // Re-enable the form
            this.signInForm.enable();

            // Reset the form
            this.signInNgForm.resetForm();

            // Set the alert
            /*this.alert = {
                type: 'error',
                message: 'Wrong email or password',
            };*/

            // Show the alert
            this.showAlert = true;
        }
    );
}

}
