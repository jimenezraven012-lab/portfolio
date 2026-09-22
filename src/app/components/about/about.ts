import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  aboutImages = [
    'image2.jpg',
    'image1.jpg',
    'image3.jpg'
  ];

  currentImage = 0;

  nextImage() {
    this.currentImage =
      (this.currentImage + 1) % this.aboutImages.length;
  }

}