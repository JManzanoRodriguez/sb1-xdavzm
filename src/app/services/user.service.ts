import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'api/users'; // Ajustar según la URL de tu API

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }

  updateUserProfile(profile: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profile`, profile);
  }

  getUserComments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/comments`);
  }

  getUserContributions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contributions`);
  }
}