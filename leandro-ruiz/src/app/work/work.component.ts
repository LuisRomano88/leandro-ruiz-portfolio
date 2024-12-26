import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

  abrirWhatsApp() {
    window.open('http://wa.me/+542612132072', '_blank');
  }
  
}
