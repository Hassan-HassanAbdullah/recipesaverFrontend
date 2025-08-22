import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SaveRecipeService } from '../../services/saveRecipe/save-recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-save-recipe',
  imports: [NgIf, NgFor, RecipeCardComponent],
  templateUrl: './save-recipe.component.html',
  styleUrl: './save-recipe.component.css'
})
export class SaveRecipeComponent {

   savedRecipes: any[] = [];
   errorMessage: string = '';

  //  savedRecipes = [
  //   {
  //     id: 1,
  //     title: 'Chicken Biryani',
  //     description: 'Aromatic basmati rice with spiced chicken curry layers.',
  //     image: 'https://source.unsplash.com/400x300/?biryani'
  //   },
  //   {
  //     id: 2,
  //     title: 'Pasta Alfredo',
  //     description: 'Creamy and cheesy Italian pasta made in white sauce.',
  //     image: 'https://source.unsplash.com/400x300/?pasta'
  //   }
  // ];



  deleteRecipe(id: number) {
    this.savedRecipes = this.savedRecipes.filter(recipe => recipe.id !== id);

  }


  constructor(private saveRecipeService: SaveRecipeService,){}


  
  
  ngOnInit(){
    

    this.saveRecipeService.getSavedRecipes().subscribe({
      next: (data) => {
        this.savedRecipes = data; // API ka data save karo
        console.log(this.savedRecipes);
        
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Unauthorized or No Data';
      }
    });
  }

}
