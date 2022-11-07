export interface Ingredient {
  id: number;
  name: string;
  calories: number;
  price: number;
  recipes: [];
  ingredientsRecipes: [];
}

export interface IngredientDTO {
  name: string;
  calories: number;
  price: number;
}
