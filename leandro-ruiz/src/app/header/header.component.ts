import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sections = ['INICIO', 'SOBRE MI', 'MODALIDAD DE TRABAJO', 'AREAS DE ESPECIALIDAD', 'CONTACTO'];
  selectedIndex = 0; // Por defecto, el primer elemento está activo

  selectSection(index: number): void {
    this.selectedIndex = index;
  }

  @Output() navigate = new EventEmitter<string>();

  onNavigate(section: string) {
    this.navigate.emit(section);
  }

}
