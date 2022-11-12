import { Ingredient } from './ingredient';
import { Multimedia } from './multimedia';

export interface Recipe {
  id: number;
  name: string;
  preparation: string;
  score: number;
  address: number;
  profileId: number;
  recommendation: string;
  views: number;
  exclusive: boolean;
  cookBookId: 1; //siempre será 1
  tags: [] | null; // siempre vacío
  ingredients: Ingredient[] | null;
  multimedia: Multimedia[];
}

export interface RecipeDTO {
  name: string;
  views: 0;
  exclusive: boolean;
  preparation: string;
  recommendation: string;
  profileId: number;
  cookbookId: 1;
}
