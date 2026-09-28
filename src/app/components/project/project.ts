import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {

  projects = [
    {
      image: 'Screenshot4.png',
      title: 'UI/UX Intern Project',
      description: 'Build a consistent workout routine after work and track progress using the fitness app.',
      link: 'https://www.figma.com/design/jEE3ocsvdWFLBsqhmeVwpZ/UIUX-Intern-Activities--Raven----2026?node-id=1-3&t=ZYx0JinsoMBIza7U-1'
    },

    {
      image: 'Screenshot.png',
      title: 'UI/UX Intern Project',
      description: 'Time-In/Time-Out Kiosk System company project.',
      link: 'https://www.figma.com/design/pvGpogvDrdSVNg8D1q2vgc/Kiosk-Time-in-Time-out-System?node-id=0-1&t=OAVXGADeGMwgki9y-1'
    },

    {
      image: 'Project3.png',
      title: 'UI/UX Personal Project',
      description: 'Car Rental Website UI designed for a modern and user-friendly experience.',
      link: 'https://www.figma.com/proto/TJ14Eu9v8XTDxz9IWvck8S/CarRentalWebsite?node-id=60-1941&viewport=572%2C89%2C0.12&t=TvVMrFwNQZjaJQvY-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    }
  ];

}