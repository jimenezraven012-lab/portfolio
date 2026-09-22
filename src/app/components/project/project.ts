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
      image: 'CarWebsite2.png',
      title: 'UI/UX Personal Project',
      description: 'Car Rental Website UI designed for a modern and user-friendly experience.'
    },
    {
      image: 'project2.png',
      title: 'UI/UX Intern Project',
      description: 'A company project designed to provide a simple and efficient user experience.'
    },
    {
      image: 'project3.png',
      title: 'UI/UX Intern Project',
      description: 'A modern interface created during my internship experience.'
    },
    {
      image: 'project4.png',
      title: 'Personal Project',
      description: 'A creative project focused on clean and responsive interface design.'
    },
    {
      image: 'project5.png',
      title: 'Web Project',
      description: 'A responsive web project built using modern web technologies.'
    }
  ];

}