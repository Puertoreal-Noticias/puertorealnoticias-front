import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments';
import { Event, Imagen } from '../interfaces/events.interface';
@Injectable({
  providedIn: 'root',
})
export class EventConectService {
  constructor(private Http: HttpClient) {}
  obtenerEventos(limit?: number): Observable<Event[]> {
    return this.Http.get<Event[]>(
      `${environment.baseUrl}/event/obtener?limit=${limit}`
    );
  }
  obtenerEvento(id: string): Observable<Event> {
    return this.Http.get<Event>(`${environment.baseUrl}/event/obtener/${id}`);
  }
  obtenerImg(id: string): Observable<Imagen> {
    return this.Http.get<Imagen>(
      `${environment.baseUrl}/event-imgs/obtener/${id}`
    );
  }
}
