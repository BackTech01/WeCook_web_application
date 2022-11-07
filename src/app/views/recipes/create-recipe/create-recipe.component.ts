import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { showMessageError } from 'src/app/helpers/toastError';
import { Ingredient, IngredientDTO } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateRecipeComponent implements OnInit {
  newReceipId: number = 0;
  newReceipName: string = '...';
  ingredientForm: FormGroup;
  loading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private recipeService: RecipeService,
    private ingredientService: IngredientsService
  ) {
    this.ingredientForm = new FormGroup({
      ingredients: new FormArray([
        new FormGroup({
          name: new FormControl('', Validators.required),
          calories: new FormControl(0, Validators.min(0)),
          price: new FormControl(0, Validators.min(0)),
        }),
      ]),
    });
  }

  firstFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    exclusive: new FormControl(false),
    recommendation: new FormControl(''),
    preparation: new FormControl('', Validators.required),
  });

  get ingredientesHelper(): FormArray {
    return this.ingredientForm.get('ingredients') as FormArray;
  }

  addIngredientRow() {
    this.ingredientesHelper.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        calories: new FormControl(0, Validators.min(0)),
        price: new FormControl(0, Validators.min(0)),
      })
    );
  }

  firstStep() {
    console.log(this.firstFormGroup);
  }

  verifyForEach() {
    console.log('THIS', this.ingredientesHelper.controls);
    console.log('THIS 0', this.ingredientesHelper.controls[0].value);
  }

  ngOnInit(): void {}

  getReceiptId() {
    return `/${this.newReceipId}`;
  }

  submitAll(stepper: MatStepper) {
    if (this.ingredientForm.invalid || this.firstFormGroup.invalid) {
      return showMessageError(
        this._snackBar,
        'Complete correctamente los campos de la receta'
      );
    }
    this.loading = true;

    const userId = localStorage.getItem('userId');

    this.recipeService
      .createRecipe({
        cookbookId: 1,
        exclusive: this.firstFormGroup.value.exclusive || false,
        name: this.firstFormGroup.value.name || '',
        preparation: this.firstFormGroup.value.preparation || '',
        profileId: userId !== null ? +userId : 0,
        recommendation: this.firstFormGroup.value.recommendation || '',
        views: 0,
      })
      .subscribe(
        (res: Recipe) => {
          this.ingredientesHelper.controls.forEach((ingredients, index) => {
            this.newReceipId = res.id;
            this.newReceipName = res.name;
            this.createIngredient(res.id, ingredients.value as IngredientDTO);
            // ingredients.value.
          });

          stepper.next();
        },
        (error) => {
          this.loading = !this.loading;
          // this.ingredientesHelper.controls.forEach((ingredients, index) => {
          //   this.newReceipId = 100;
          //   this.newReceipName = 'asfasf';
          //   this.createIngredient(100, ingredients.value as IngredientDTO);
          //   // ingredients.value.
          // });
          showMessageError(
            this._snackBar,
            'Ha ocurrido un error en el servicio, intente de nuevo'
          );
        }
      );
  }

  createIngredient(recipeId: number, ingredientDTO: IngredientDTO) {
    this.ingredientService.createIngredient(ingredientDTO).subscribe(
      (res: Ingredient) => {
        this.linkIngredientToReceipte(recipeId, res.id);
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

  linkIngredientToReceipte(ingredientId: number, recipeId: number) {
    this.recipeService.addIngredientToReceipe(recipeId, ingredientId).subscribe(
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
