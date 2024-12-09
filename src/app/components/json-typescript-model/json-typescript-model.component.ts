import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-typescript-model',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './json-typescript-model.component.html',
  styleUrls: ['./json-typescript-model.component.scss']
})
export class JsonTypescriptModelComponent {
  jsonInput = '';
  tsModel = '';

  generateModel() {
    try {
      const jsonObj = JSON.parse(this.jsonInput);
      this.tsModel = Object.keys(jsonObj)
        .map(key => `${key}: ${typeof jsonObj[key]};`)
        .join('\n');
    } catch (error) {
      this.tsModel = 'Invalid JSON';
    }
  }
}
