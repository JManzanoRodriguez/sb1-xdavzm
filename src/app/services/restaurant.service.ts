import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'api/restaurants'; // Ajustar según la URL de tu API

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRestaurantById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addRestaurant(restaurant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, restaurant);
  }

  updateRestaurant(id: string, restaurant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, restaurant);
  }

  deleteRestaurant(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}