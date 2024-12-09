import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { JsonFormatterComponent } from './components/json-formatter/json-formatter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
