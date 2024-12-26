import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  abrirWhatsApp() {
    window.open('http://wa.me/+542612132072', '_blank');
  }


}
