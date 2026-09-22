import { Component, HostListener } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Project } from './components/project/project';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Home,
    About,
    Project,
    Skills,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Active navbar item
  activeSection = 'home';

  // Social icons
  showSocials = true;

  toggleSocials() {
    this.showSocials = !this.showSocials;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const sections = ['home', 'about', 'project', 'skills', 'contact'];

    for (const section of sections) {

      const element = document.getElementById(section);

      if (element) {

        const top = element.offsetTop - 120;
        const bottom = top + element.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          this.activeSection = section;
        }

      }

    }

  }

}