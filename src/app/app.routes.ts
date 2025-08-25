import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SaveRecipeComponent } from './pages/save-recipe/save-recipe.component';
import { ExploreRecipeComponent } from './pages/explore-recipe/explore-recipe.component';
import { RecipeGenrateCardComponent } from './components/recipe-genrate-card/recipe-genrate-card.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'recipe-detail', component: RecipeDetailComponent },
  { path: 'save-recipe', component: SaveRecipeComponent },
  { path: 'genrate_recipy', component: RecipeGenrateCardComponent },
  {path: 'explore-recipe', component:ExploreRecipeComponent},
  { path: '**', component: PageNotFoundComponent }


//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'saved', component: SavedRecipesComponent, canActivate: [AuthGuard] },
];
