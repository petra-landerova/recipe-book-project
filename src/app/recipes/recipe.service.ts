import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

// private recipes: Recipe[] = [
//    new Recipe('Blueberry pancakes',
//      'To brighten up your morning!',
//      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273456_8-a5710e5.jpg?resize=960,872?quality=90&webp=true&resize=375,341',
//      [
//        new Ingredient('flour', 1),
//        new Ingredient('milk', 3),
//       new Ingredient('eggs', 2),
//        new Ingredient('blueberries', 25)
//      ]),
//    new Recipe('Steak with plum sauce',
//      'A delicious dinner option!',
//     'https://world-spirits.com/images/2015/rezepte/rind.jpg',
//      [
//        new Ingredient('beef', 1),
//        new Ingredient('plums', 6),
//        new Ingredient('cognac', 1)
//      ]),
//    new Recipe('Pumpkin soup',
//      'A perfect recipe for the fall!',
//      'https://media.healthyfood.com/wp-content/uploads/2019/07/Creamy-pumpkin-soup.jpg',
//      [
//        new Ingredient('pumpkin', 1),
//        new Ingredient('vegetable broth', 1),
//        new Ingredient('coconut milk', 1)
//      ])
//  ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

    setRecipes (recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
    }

  getRecipes() {
    return this.recipes.slice();
    // we get a copy through slice and we also return the copy, not the original!
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

 addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
 }

 updateRecipe (index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
   this.recipesChanged.next(this.recipes.slice());

 }

 deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
 }
}
