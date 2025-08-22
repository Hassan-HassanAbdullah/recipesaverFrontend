import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SaveRecipeService {

  constructor(private http: HttpClient) {}


  private apiUrl = environment.recipeApiUrl; // Use the environment variable for API URL
  

  saveRecipe(recipeData: any, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // yeh token localStorage se milega
    });

    return this.http.post(`${this.apiUrl}/save-recipe`, recipeData, { headers });
  }

 


  getSavedRecipes(): Observable<any> {
    const token = localStorage.getItem('authToken'); // Token login ke baad save hota hai
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/get-save-recipe`, { headers });
  }
}
