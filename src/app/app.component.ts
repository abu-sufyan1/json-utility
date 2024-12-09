import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonFormatterComponent } from './components/json-formatter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonFormatterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
