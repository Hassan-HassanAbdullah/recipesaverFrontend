import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DownloadRecipeService } from '../../services/downloadRecipe/download-recipe.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink, NgFor],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  constructor(private route: ActivatedRoute, private downloadRecipeService: DownloadRecipeService, private authService: AuthServiceService, private toastService: ToastService) { }

  recipe: any;
  authCardVisible: boolean = false;


  handleDownload(recipe: any) {
    if (!this.authService.checkLogin()) {
      // this.authCardVisible = true;
      this.toastService.showToast('error', 'Please login to download the recipe.');
    } else {
      // Download service call karo
      this.downloadRecipeService.downloadRecipeAsText(recipe);
      this.toastService.showToast('success', 'Recipe downloaded successfully!');
    }
  }



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const recipeParam = params['recipe'];

      if (recipeParam) {
        try {
          this.recipe = JSON.parse(decodeURIComponent(recipeParam));
          console.log('📦 Recipe Received:', this.recipe);
        } catch (err) {
          console.error('❌ Error parsing recipe:', err);
        }
      }
    });
  }
}
