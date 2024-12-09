import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-formatter',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container mt-3">
      <h2>JSON Formatter</h2>
      <textarea [(ngModel)]="jsonInput" rows="10" class="form-control" placeholder="Enter JSON here"></textarea>
      <button (click)="formatJson()" class="btn btn-primary mt-2">Format JSON</button>
      <h4 class="mt-3">Formatted Output:</h4>
      <pre>{{ formattedJson }}</pre>
    </div>
  `,
  styles: [
    `textarea { font-family: monospace; } pre { background: #f8f9fa; padding: 10px; }`
  ]
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