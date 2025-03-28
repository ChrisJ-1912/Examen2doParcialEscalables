import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Examen2doParcial';

  handleShowAll() {
    console.log('Mostrar todo');
    // Lógica para mostrar todo
  }
  
  handleShowRecent() {
    console.log('Mostrar recientes');
    // Lógica para mostrar recientes
  }
}

