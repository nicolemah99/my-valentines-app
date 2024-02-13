import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-display',
  standalone: true,
  imports: [],
  templateUrl: './image-display.component.html',
  styleUrl: './image-display.component.css'
})
export class ImageDisplayComponent {
  @Input() imageUrl: string = '';
  @Input() caption: string = '';
  @Input() date: string = '';
}
