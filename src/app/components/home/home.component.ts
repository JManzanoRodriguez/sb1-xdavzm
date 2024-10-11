import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Bienvenido a electroTrips</h2>
    <p>Tu compañero de viaje para coches eléctricos, especialmente Tesla.</p>
    <div>
      <h3>Explora nuestras secciones:</h3>
      <ul>
        <li><a routerLink="/hotels">Hoteles con supercargadores</a></li>
        <li><a routerLink="/restaurants">Restaurantes con cargadores</a></li>
      </ul>
    </div>
  `,
  styles: [`
    h2 { color: #1976d2; }
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 10px; }
    a { color: #1976d2; text-decoration: none; }
  `]
})
export class HomeComponent {}