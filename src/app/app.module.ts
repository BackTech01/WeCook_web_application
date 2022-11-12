import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRecipeComponent } from './views/recipes/create-recipe/create-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ProfilesComponent } from './views/profiles/profiles.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RecipesComponent } from './views/recipes/recipes/recipes.component';
import { HomeComponent } from './views/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailRecipeComponent } from './views/recipes/detail-recipe/detail-recipe.component';
import { LoginComponent } from './views/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReceiptContainerComponent } from './components/receipt-container/receipt-container.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentSectionComponent } from './views/recipes/detail-recipe/comment-section/comment-section.component';
import { RecetariesComponent } from './views/profiles/recetaries/recetaries.component';
import { DialogRecetariesComponent } from './views/profiles/recetaries/dialog-recetaries/dialog-recetaries.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
@NgModule({
  declarations: [
    AppComponent,
    CreateRecipeComponent,
    ProfilesComponent,
    SignInComponent,
    RecipesComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DetailRecipeComponent,
    LoginComponent,
    SignUpComponent,
    ReceiptContainerComponent,
    CommentComponent,
    CommentSectionComponent,
    RecetariesComponent,
    DialogRecetariesComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatChipsModule,
    MatDividerModule,
    MatSliderModule,
    MatGridListModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatStepperModule,
    MatCheckboxModule,
    MaterialFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
