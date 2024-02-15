import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-display',
  standalone: true,
  imports: [],
  templateUrl: './image-display.component.html',
  styleUrl: './image-display.component.css'
})
export class ImageDisplayComponent implements OnInit {
  imageUrl: string = '';
  caption: string = '';
  date: string = '';
  currentImageIndex = 0;
  images = [
    { url: './assets/images/1.png', caption: 'Kincaid Hammock Date🌲', date: '2 months' },
    { url: './assets/images/2.png', caption: 'You\'re my best friend👫🏼 ', date: '3.5 months' },
    { url: './assets/images/3.png', caption: 'Kiss me more xoxo 💋', date: '3.5 months' },
    { url: './assets/images/5.png', caption: 'My favorite photo of us 💛', date: '1.5 months' },
    { url: './assets/images/6.png', caption: 'He a granola boy ⛰️', date: '4.5 months' },
    { url: './assets/images/7.png', caption: 'I always want to hug you 🫂', date: '2 months' },
    { url: './assets/images/9.png', caption: 'Probably peeing into JC 🏄🏻', date: '2 years 2 months' },
    { url: './assets/images/10.png', caption: 'I like when he teach me to golf 🏌🏻', date: '2 years 3 months' },
    { url: './assets/images/11.png', caption: 'Once day we\'ll move to the sun!🌅', date: '1 year and 1 month' },
    { url: './assets/images/12.png', caption: 'He watch me retire ⛷️ ', date: '1 year 10 months' },
    { url: './assets/images/13.png', caption: 'He still need a haircut 💇🏽‍♂️', date: '2 years 5 months' },
    { url: './assets/images/14.png', caption: 'Best date ever!🇯🇵🌸', date: '2 years 6 months' },
    { url: './assets/images/15.png', caption: 'I run he follow w/hank 🦮🛼', date: '2 years 3 months' },
    { url: './assets/images/16.png', caption: 'He clean 🫧', date: '1.5 months' },
    { url: './assets/images/18.png', caption: 'Fueling up for a big day of liming! 🛴🍋‍🟩', date: '3.5 months' },
    { url: './assets/images/20.png', caption: 'Gene & Birdy 🦮🐥', date: '2 years 9 months' },
    { url: './assets/images/21.png', caption: 'Christmas in Canada 🇨🇦🎄', date: '2 years 9 months' },
    { url: './assets/images/22.png', caption: 'My handsome man 😍😍😍', date: '3.5 months' },
    { url: './assets/images/23.png', caption: 'GRETA 🕹️🍔', date: '2 years 9 months' },
    { url: './assets/images/24.png', caption: 'Our first goodbye 😢', date: '2 weeks' },
    { url: './assets/images/27.png', caption: 'Self Care 💗🛁', date: '1 year 10 months' },
    { url: './assets/images/28.png', caption: 'The best travel buddy 🛩️🧳', date: '3.5 months' },
    { url: './assets/images/32.png', caption: 'Harris Beach, OR : One of my favorite memories 🌊🪨🌲', date: '1 year 1 month' },
    { url: './assets/images/35.png', caption: 'He loves the sand!!! 🏖️', date: '1 year 11 months' },
    { url: './assets/images/36.png', caption: 'Just the cutest when he smiles 😆', date: '1 year 11 months' },
    { url: './assets/images/38.png', caption: 'He wouldn\'t take my spot 😥🍺', date: '1 yea 11 months' },
    { url: './assets/images/39.png', caption: 'One of our first photos together 🐳', date: '1.5 months' },
    { url: './assets/images/40.png', caption: 'He watch me graduate from where it all started 🎓🌊🐺💛💚', date: '2 years 1 month' },




  ];

  ngOnInit(): void {
    this.changeImage(); // Initial image setup
    setInterval(() => {
      this.changeImage(); // Change image every 5 seconds
    }, 5000);
  }
  changeImage(): void {
    const image = this.images[this.currentImageIndex]; // Get the current image
    this.imageUrl = image.url;
    this.caption = image.caption;
    this.date = image.date;

    // Increment the index, reset to 0 if at the end of the array
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}

