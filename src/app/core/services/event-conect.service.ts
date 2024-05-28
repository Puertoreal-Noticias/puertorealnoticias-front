import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  modificarEvento(event: Event): Observable<Event> {
    return this.Http.patch<Event>(
      `${environment.baseUrl}/event/actualizar/${event._id}`,
      event,
      { responseType: 'text' as 'json' }
    );
  }
  eliminarEvento(id: string): Observable<Event> {
    return this.Http.delete<Event>(
      `${environment.baseUrl}/event/eliminar/${id}`
    );
  }
  addEvent(event: Event): Observable<Event> {
    return this.Http.post<Event>(`${environment.baseUrl}/event/crear`, event);
  }
  addImgToEvent(id: string, img: File): Observable<Imagen> {
    const formData = new FormData();
    formData.append('imagen', img);
    return this.Http.post<Imagen>(
      `${environment.baseUrl}/event-imgs/crear/${id}`,
      formData
    );
  }

  modificarImgToEvent(id: string, img: File): Observable<Imagen> {
    const formData = new FormData();
    formData.append('imagen', img);

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('authToken'),
    });

    return this.Http.put<Imagen>(
      `${environment.baseUrl}/event-imgs/modificar/${id}`,
      formData,
      { headers: headers }
    );
  }
}
