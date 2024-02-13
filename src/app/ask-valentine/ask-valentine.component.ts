import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ask-valentine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ask-valentine.component.html',
  styleUrl: './ask-valentine.component.css'
})
export class AskValentineComponent {
  name: string = 'Birdy';
  message: string = '';

  onYes() {
    this.message = "Yay! You said yes! 😊";
  }

  onNo() {
    this.message = "I'm sad😢";
  }

}
