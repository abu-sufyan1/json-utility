import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-formatter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss']
})
export class JsonFormatterComponent {
  jsonInput = '';
  formattedJson = '';

  formatJson() {
    try {
      this.formattedJson = JSON.stringify(JSON.parse(this.jsonInput), null, 2);
    } catch (error) {
      this.formattedJson = 'Invalid JSON';
    }
  }
}