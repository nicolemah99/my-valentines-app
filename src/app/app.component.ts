import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AskValentineComponent } from './ask-valentine/ask-valentine.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AskValentineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-valentines-app';
}
