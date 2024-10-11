import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Hoteles con Supercargadores</h2>
    <input [(ngModel)]="searchTerm" placeholder="Buscar hoteles...">
    <ul>
      <li *ngFor="let hotel of filteredHotels">
        {{ hotel.name }}
        <p>Valoración: {{ hotel.rating }}/5</p>
        <button (click)="showDetails(hotel)">Ver detalles</button>
      </li>
    </ul>
    <button (click)="addNewHotel()">Agregar nuevo hotel</button>
  `,
  styles: [`
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px; }
    button { background-color: #1976d2; color: white; border: none; padding: 5px 10px; cursor: pointer; }
  `]
})
export class HotelListComponent implements OnInit {
  hotels: any[] = [];
  filteredHotels: any[] = [];
  searchTerm: string = '';

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe(
      (data) => {
        this.hotels = data;
        this.filterHotels();
      },
      (error) => console.error('Error al cargar hoteles:', error)
    );
  }

  filterHotels() {
    this.filteredHotels = this.hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  showDetails(hotel: any) {
    // Implementar lógica para mostrar detalles del hotel
    console.log('Mostrar detalles del hotel:', hotel);
  }

  addNewHotel() {
    // Implementar lógica para agregar nuevo hotel
    console.log('Agregar nuevo hotel');
  }
}