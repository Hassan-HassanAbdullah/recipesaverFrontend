import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-explore-recipe',
  imports: [NgClass,NgFor, RecipeCardComponent],
  templateUrl: './explore-recipe.component.html',
  styleUrl: './explore-recipe.component.css'
})
export class ExploreRecipeComponent {
 


  selectedCuisine: string = '';

  cuisines = [
    { name: 'Italian', icon: '🍝' },
    { name: 'Chinese', icon: '🥡' },
    { name: 'Mexican', icon: '🌮' },
    { name: 'Indian', icon: '🍛' },
    { name: 'Pakistani', icon: '🍲' },
    { name: 'Japanese', icon: '🍣' }
  ];

  selectCuisine(cuisineName: string) {
    this.selectedCuisine = cuisineName;
    console.log('Selected:', cuisineName);
  }



  recipes = [
    {
      name: 'Spicy Mexican Tacos',
      description: 'A delicious blend of spices...',
      time: '30 minutes',
      servings: 4,
      image: '',
      cuisine: 'Mexican',
      rating: 4.5
    },
    {
      name: 'Italian Pasta',
      description: 'Creamy Alfredo with herbs',
      time: '25 minutes',
      servings: 2,
      image: 'assets/images/pasta.jpg',
      cuisine: 'Italian',
      rating: 4.8
    },
    {
      name: 'Chinese Stir Fry',
      description: 'Quick and healthy stir fry with vegetables',
      time: '20 minutes',
      servings: 3,
      image: 'assets/images/stir-fry.jpg',
      cuisine: 'Chinese',
      rating: 4.2
    },
    {
      name: 'Indian Curry',
      description: 'Rich and flavorful curry with spices',
      time: '40 minutes',
      servings: 5,
      image: 'assets/images/curry.jpg',
      cuisine: 'Indian',
      rating: 4.6
    },
    {
      name: 'Japanese Sushi',
      description: 'Fresh sushi rolls with seafood',
      time: '1 hour',
      servings: 6,
      image: 'assets/images/sushi.jpg',
      cuisine: 'Japanese',
      rating: 4.9
    },
    {
      name: 'Pakistani Biryani',
      description: 'Aromatic rice dish with meat and spices',
      time: '1.5 hours',
      servings: 8,
      image: 'assets/images/biryani.jpg',
      cuisine: 'Pakistani',
      rating: 4.7
    },
    
  ];

  get filteredRecipes() {
    if (!this.selectedCuisine || this.selectedCuisine.trim() === '') {
    return this.recipes; // agar filter selected nahi to sab recipes dikhao
  }
  return this.recipes.filter(recipe => recipe.cuisine === this.selectedCuisine);
  }

}
