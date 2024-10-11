import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Panel de Administración</h2>
    <h3>Hoteles pendientes de aprobación</h3>
    <ul>
      <li *ngFor="let hotel of pendingHotels">
        {{ hotel.name }}
        <button (click)="approveHotel(hotel)">Aprobar</button>
        <button (click)="rejectHotel(hotel)">Rechazar</button>
      </li>
    </ul>
    <h3>Restaurantes pendientes de aprobación</h3>
    <ul>
      <li *ngFor="let restaurant of pendingRestaurants">
        {{ restaurant.name }}
        <button (click)="approveRestaurant(restaurant)">Aprobar</button>
        <button (click)="rejectRestaurant(restaurant)">Rechazar</button>
      </li>
    </ul>
  `,
  styles: [`
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 10px; }
    button { margin-left: 10px; cursor: pointer; }
    button:first-of-type { background-color: #4CAF50; color: white; border: none; padding: 5px 10px; }
    button:last-of-type { background-color: #f44336; color: white; border: none; padding: 5px 10px; }
  `]
})
export class AdminDashboardComponent implements OnInit {
  pendingHotels: any[] = [];
  pendingRestaurants: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadPendingItems();
  }

  loadPendingItems() {
    this.adminService.getPendingHotels().subscribe(
      (data) => this.pendingHotels = data,
      (error) => console.error('Error al cargar hoteles pendientes:', error)
    );

    this.adminService.getPendingRestaurants().subscribe(
      (data) => this.pendingRestaurants = data,
      (error) => console.error('Error al cargar restaurantes pendientes:', error)
    );
  }

  approveHotel(hotel: any) {
    this.adminService.approveHotel(hotel.id).subscribe(
      () => {
        console.log('Hotel aprobado:', hotel);
        this.loadPendingItems();
      },
      (error) => console.error('Error al aprobar hotel:', error)
    );
  }

  rejectHotel(hotel: any) {
    this.adminService.rejectHotel(hotel.id).subscribe(
      () => {
        console.log('Hotel rechazado:', hotel);
        this.loadPendingItems();
      },
      (error) => console.error('Error al rechazar hotel:', error)
    );
  }

  approveRestaurant(restaurant: any) {
    this.adminService.approveRestaurant(restaurant.id).subscribe(
      () => {
        console.log('Restaurante aprobado:', restaurant);
        this.loadPendingItems();
      },
      (error) => console.error('Error al aprobar restaurante:', error)
    );
  }

  rejectRestaurant(restaurant: any) {
    this.adminService.rejectRestaurant(restaurant.id).subscribe(
      () => {
        console.log('Restaurante rechazado:', restaurant);
        this.loadPendingItems();
      },
      (error) => console.error('Error al rechazar restaurante:', error)
    );
  }
}