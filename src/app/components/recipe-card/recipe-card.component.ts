import { Component, input, Input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {

  @Input() recipe: any;

  defaultImage = 'assets/images/recipe-card-image.avif';

  getImage() {
    return this.recipe.image || this.defaultImage;
  }

  onLike() {
    alert('Liked recipe: ' + (this.recipe.name || 'Unknown Recipe'));
  }


   getEncodedRecipe() {
    return encodeURIComponent(JSON.stringify(this.recipe));
  };
}
