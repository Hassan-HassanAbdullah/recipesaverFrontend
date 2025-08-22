import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private api = environment.authApiUrl; // Use the environment variable for API URL
  private loggedIn = new BehaviorSubject<boolean>(this.checkLogin());

  constructor(private http: HttpClient) { }

  // 🔐 Check if user has token
  checkLogin(): boolean {
    return !!localStorage.getItem('authToken');
  }

  //get user id 
  getUserId(): string | null {
    const user = localStorage.getItem('user');
    if (!user) return null;

    try {
      const parsedUser = JSON.parse(user);
      return parsedUser.id || null;
    } catch (error) {
      console.error('Invalid user data in localStorage');
      return null;
    }
  }


  // ✅ Register user
  register(userData: any): Observable<any> {
    return this.http.post(`${this.api}/register`, userData);
  }

  // ✅ Login user
  login(userData: any): Observable<any> {
    return this.http.post(`${this.api}/login`, userData);
  }

  // 💾 Save token
  saveToken(token: string) {
    localStorage.setItem('authToken', token);
    this.loggedIn.next(true);
  }

  // 🔓 Logout
  logout() {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false);
  }

  // 🔍 Observe login state
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
