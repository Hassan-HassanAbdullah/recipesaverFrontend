import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { FormsModule } from '@angular/forms';
import { recipes } from '../../Data/full_recipes';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-explore-recipe',
  imports: [ NgFor,NgIf, RecipeCardComponent, FormsModule,NgxPaginationModule],
  templateUrl: './explore-recipe.component.html',
  styleUrl: './explore-recipe.component.css'
})
export class ExploreRecipeComponent {

  selectedCuisine: string = 'all';
  selectedDishType: string = 'all';
  filteredRecipes: any[] = [];
  recipes :any[] = recipes


   // ✅ Pagination variables
  page: number = 1;       // current page
  pageSize: number = 8;   // recipes per page



  cuisines = [
    { name: 'Italian', icon: '🍝' },
    { name: 'Chinese', icon: '🥡' },
    { name: 'Mexican', icon: '🌮' },
    { name: 'Indian', icon: '🍛' },
    { name: 'Pakistani', icon: '🍲' },
    { name: 'Japanese', icon: '🍣' },
    { name: 'Balochi', icon: '🍖' }
    
  ];

  dishTypes = ['Main Course', 'Sweet', 'Dessert', 'Snack'];

  

  constructor() {
    this.filteredRecipes = this.recipes; // Default show all
  }

  onFilterChange() {
    this.filteredRecipes = this.recipes.filter(recipe => {
      const cuisineMatch =
        this.selectedCuisine === 'all' ||
        recipe.cuisine === this.selectedCuisine;

      const dishMatch =
        this.selectedDishType === 'all' ||
        recipe.dishTypes === this.selectedDishType;

      return cuisineMatch && dishMatch;
    });

    this.page = 1; // Reset page on filter change
  }


  

}