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
  isModalOpen: boolean = false;

  emailLink: string = 'mailto:absufyn@gmail.com?subject=Bug%20Report&body=Describe%20the%20issue%20here';
  githubIssueLink: string = 'https://github.com/abu-sufyan1/json-utility/issues/new?title=Bug%20Report&body=Describe%20your%20issue%20here';

  openContactModal(): void {
    this.isModalOpen = true;
  }

  closeContactModal(): void {
    this.isModalOpen = false;
  }
}

