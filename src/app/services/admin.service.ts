import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'api/admin'; // Ajustar según la URL de tu API

  constructor(private http: HttpClient) {}

  getPendingHotels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pending-hotels`);
  }

  getPendingRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pending-restaurants`);
  }

  approveHotel(id: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/approve-hotel/${id}`, {});
  }

  rejectHotel(id: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reject-hotel/${id}`, {});
  }

  approveRestaurant(id: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/approve-restaurant/${id}`, {});
  }

  rejectRestaurant(id: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reject-restaurant/${id}`, {});
  }
}