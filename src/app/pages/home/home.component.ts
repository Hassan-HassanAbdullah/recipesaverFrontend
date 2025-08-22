import { Component, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RecipeGenrateCardComponent } from '../../components/recipe-genrate-card/recipe-genrate-card.component';
import { ExploreRecipeComponent } from '../explore-recipe/explore-recipe.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule,   RecipeGenrateCardComponent, ExploreRecipeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // home.component.ts
leftoverInput: string = '';
cuisines: string[] = ['Italian', 'Chinese', 'Indian', 'Mexican', 'Pakistani'];

generateRecipe() {
  // later call Express API here
  console.log('Generate recipe for:', this.leftoverInput);
}

getCuisineRecipes(type: string) {
  // later call Spoonacular API here
  console.log('Cuisine selected:', type);
}
}
