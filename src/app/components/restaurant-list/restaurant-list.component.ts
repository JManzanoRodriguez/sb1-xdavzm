import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Restaurantes con Cargadores</h2>
    <input [(ngModel)]="searchTerm" placeholder="Buscar restaurantes...">
    <ul>
      <li *ngFor="let restaurant of filteredRestaurants">
        {{ restaurant.name }}
        <p>Valoración: {{ restaurant.rating }}/5</p>
        <button (click)="showDetails(restaurant)">Ver detalles</button>
      </li>
    </ul>
    <button (click)="addNewRestaurant()">Agregar nuevo restaurante</button>
  `,
  styles: [`
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px; }
    button { background-color: #1976d2; color: white; border: none; padding: 5px 10px; cursor: pointer; }
  `]
})
export class RestaurantListComponent implements OnInit {
  restaurants: any[] = [];
  filteredRestaurants: any[] = [];
  searchTerm: string = '';

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      (data) => {
        this.restaurants = data;
        this.filterRestaurants();
      },
      (error) => console.error('Error al cargar restaurantes:', error)
    );
  }

  filterRestaurants() {
    this.filteredRestaurants = this.restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  showDetails(restaurant: any) {
    // Implementar lógica para mostrar detalles del restaurante
    console.log('Mostrar detalles del restaurante:', restaurant);
  }

  addNewRestaurant() {
    // Implementar lógica para agregar nuevo restaurante
    console.log('Agregar nuevo restaurante');
  }
}