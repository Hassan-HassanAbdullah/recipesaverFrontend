import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SaveRecipeComponent } from './pages/save-recipe/save-recipe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'recipe-detail', component: RecipeDetailComponent },
  { path: 'save-recipe', component: SaveRecipeComponent },
  { path: '**', component: PageNotFoundComponent }


//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'saved', component: SavedRecipesComponent, canActivate: [AuthGuard] },
];
