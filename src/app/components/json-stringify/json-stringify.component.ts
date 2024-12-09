import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-stringify',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './json-stringify.component.html',
  styleUrls: ['./json-stringify.component.scss']
})
export class JsonStringifyComponent {
  inputObject = '';
  jsonString = '';

  stringifyObject() {
    try {
      this.jsonString = JSON.stringify(eval(`(${this.inputObject})`));
    } catch (error) {
      this.jsonString = 'Invalid Object';
    }
  }
}