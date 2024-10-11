import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>electroTrips</h1>
      <nav>
        <a routerLink="/">Inicio</a>
        <a routerLink="/hotels">Hoteles</a>
        <a routerLink="/restaurants">Restaurantes</a>
        <a routerLink="/profile">Perfil</a>
        <a routerLink="/admin">Admin</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <p>&copy; 2023 electroTrips. Todos los derechos reservados.</p>
    </footer>
  `,
  styles: [`
    header {
      background-color: #1976d2;
      color: white;
      padding: 1rem;
    }
    nav a {
      color: white;
      margin-right: 1rem;
      text-decoration: none;
    }
    main {
      padding: 2rem;
    }
    footer {
      background-color: #f5f5f5;
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'electroTrips';
}