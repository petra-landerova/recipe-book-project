import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Blueberry pancakes',
      'To brighten up your morning!',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273456_8-a5710e5.jpg?resize=960,872?quality=90&webp=true&resize=375,341',
      [
        new Ingredient('flour', 1),
        new Ingredient('milk', 3),
        new Ingredient('eggs', 2),
        new Ingredient('blueberries', 25)
      ]),
    new Recipe('Steak with plum sauce',
      'A delicious dinner option!',
      'https://world-spirits.com/images/2015/rezepte/rind.jpg',
      [
        new Ingredient('beef', 1),
        new Ingredient('plums', 6),
        new Ingredient('cognac', 1)
      ]),
    new Recipe('Pumpkin soup',
      'A perfect recipe for the fall!',
      'https://media.healthyfood.com/wp-content/uploads/2019/07/Creamy-pumpkin-soup.jpg',
      [
        new Ingredient('pumpkin', 1),
        new Ingredient('vegetable broth', 1),
        new Ingredient('coconut milk', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}


  getRecipes() {
    return this.recipes.slice();
    // we get a copy through slice
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }


}
