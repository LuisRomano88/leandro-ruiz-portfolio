import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent {
  abrirWhatsApp() {
    window.open('http://wa.me/+542612132072', '_blank');
  }
}
