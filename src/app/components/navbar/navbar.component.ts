import { NgIf } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-navbar',
  imports: [NgIf, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDark = false;
  user: any = null;
  dropdownOpen = false;

  constructor(private router: Router, private userService: UserService) {}

  toggleTheme() {
    this.isDark = !this.isDark;
    const html = document.documentElement;

    if (this.isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }


   

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    }


   
   

    // Check localStorage in case of reload
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.userService.setUser(JSON.parse(savedUser));
    }

    // Listen to user changes
    this.userService.user$.subscribe((userData) => {
      this.user = userData;
    });

  }



  authCardShow: boolean = false

  

  @Output() authCard = new EventEmitter<boolean>();

  showAuthCard() {
    this.authCardShow = !this.authCardShow; // Toggle between true and false
    this.authCard.emit(this.authCardShow);  // Emit the current state
  }



 

  // ya code ya use logi ha to show karta ha 
  
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // User data logout 
   logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['/']); // redirect to home or login
  }

}
