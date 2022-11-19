import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfilesComponent } from './views/profiles/profiles.component';
import { RecetarieRecipesComponent } from './views/profiles/recetaries/recetarie-recipes/recetarie-recipes.component';
import { CreateRecipeComponent } from './views/recipes/create-recipe/create-recipe.component';
import { DetailRecipeComponent } from './views/recipes/detail-recipe/detail-recipe.component';
import { RecipesComponent } from './views/recipes/recipes/recipes.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'receta', component: RecipesComponent },
  { path: 'crearReceta', component: CreateRecipeComponent },
  { path: 'detalleReceta/:id', component: DetailRecipeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'perfil/:id', component: ProfilesComponent },
  { path: 'recetario/:id', component: RecetarieRecipesComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
