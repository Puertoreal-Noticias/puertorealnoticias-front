import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  logearUsuario = (name: string, password: string) => {
    return this.http.post(
      `${environment.baseUrl}/auth/login`,
      {
        name,
        password,
      },
      { responseType: 'text' }
    );
  };
  isUserAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return token != null;
  }
}
