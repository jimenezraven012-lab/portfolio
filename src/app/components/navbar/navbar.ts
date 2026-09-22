import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  @Input() activeSection = 'home';


  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    document.documentElement.classList.toggle(
      'dark',
      this.darkMode
    );
  }


}