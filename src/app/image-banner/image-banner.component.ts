import { Component, OnInit } from '@angular/core';
import { ImageDisplayComponent } from '../image-display/image-display.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-banner',
  standalone: true,
  imports: [ImageDisplayComponent, CommonModule],
  templateUrl: './image-banner.component.html',
  styleUrl: './image-banner.component.css'
})
export class ImageBannerComponent implements OnInit{
images = [
    { url: './assets/images/1.png', caption: 'Caption 1', date: '1 week' },
    { url: './assets/images/2.png', caption: 'Caption 2', date: '1 month' },
    { url: './assets/images/3.png', caption: 'Caption 2', date: '3 months' },
    { url: './assets/images/4.png', caption: 'Caption 1', date: '1 week' },
    { url: './assets/images/5.png', caption: 'Caption 2', date: '1 month' },
    { url: './assets/images/6.png', caption: 'Caption 2', date: '3 months' },
  ];
  currentImageIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000); // Change image every 3 seconds
  }
}