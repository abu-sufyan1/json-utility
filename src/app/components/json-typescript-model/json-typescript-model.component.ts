import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-typescript-model',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './json-typescript-model.component.html',
  styleUrls: ['./json-typescript-model.component.scss']
})
export class JsonTypescriptModelComponent {
  jsonInput = '';
  tsModel = '';

  public generateModel() {
    try {
      const jsonObj = JSON.parse(this.jsonInput);
      const interfaces = new Map<string, string>();
      this.generateTypeScriptModel(jsonObj, 'Root', interfaces);
      this.tsModel = Array.from(interfaces.values()).join('\n\n').trim() + '\n';
    } catch (error) {
      this.tsModel = 'Invalid JSON';
    }
  }

  public copyCode() {
    const codeBlock = document.getElementById('codeBlock')?.innerText;
    if (codeBlock) {
      navigator.clipboard.writeText(codeBlock).then(() => {
        alert('Code copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }

  private generateTypeScriptModel(jsonObj: any, modelName: string, interfaces: Map<string, string>): void {
    if (typeof jsonObj !== 'object' || jsonObj === null) {
      return;
    }

    if (Array.isArray(jsonObj)) {
      const arrayType = this.determineArrayType(jsonObj, interfaces);
      interfaces.set(modelName, `export interface ${modelName} {
  items: ${arrayType}[];
}`);
      return;
    }

    const properties = Object.entries(jsonObj)
      .map(([key, value]) => {
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          const nestedModelName = this.capitalize(key);
          if (!interfaces.has(nestedModelName)) {
            this.generateTypeScriptModel(value, nestedModelName, interfaces);
          }
          return `  ${key}: ${nestedModelName};`;
        } else if (Array.isArray(value) && typeof value[0] === 'object') {
          const nestedModelName = this.capitalize(key.slice(0, -1));
          if (!interfaces.has(nestedModelName)) {
            this.generateTypeScriptModel(value[0], nestedModelName, interfaces);
          }
          return `  ${key}: ${nestedModelName}[];`;
        }
        return `  ${key}: ${this.determineType(value)};`;
      })
      .join('\n');

    interfaces.set(modelName, `export interface ${modelName} {
${properties}
}`);
  }

  private determineType(value: any): string {
    if (typeof value === 'object' && value !== null) {
      return 'any';
    }
    if (Array.isArray(value)) {
      const arrayType = this.determineArrayType(value, new Map());
      return `${arrayType}[]`;
    }
    return typeof value;
  }

  private determineArrayType(array: any[], interfaces: Map<string, string>): string {
    const types = Array.from(new Set(array.map(item => {
      if (typeof item === 'object' && item !== null) {
        const nestedModelName = 'Anonymous';
        if (!interfaces.has(nestedModelName)) {
          this.generateTypeScriptModel(item, nestedModelName, interfaces);
        }
        return nestedModelName;
      }
      return this.determineType(item);
    })));
    return types.length === 1 ? types[0] : 'any';
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
