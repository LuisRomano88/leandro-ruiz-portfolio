import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leandro-ruiz';

  activeSection: string = 'home'; // Define la sección inicial (home).

  setActiveSection(section: string) {
    this.activeSection = section;
  }

}
