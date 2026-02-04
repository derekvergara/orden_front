import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; //url de nuestro backend 
  constructor (private http: HttpClient) {}
  
  //Login
  login(credentials: {username: string; password: string}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
  // Registrp rol admin
  register(data: {username: string; password: string; role: string}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }

  //Guardamos el token de manera local 
  saveToken (token: string) {
    localStorage.setItem('jwt', token);
  }

  //Obtenemos el token guardado
  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  //Eliminamos el token al cerrar sesion
  logout() {
    localStorage.removeItem('jwt');
  }
}
