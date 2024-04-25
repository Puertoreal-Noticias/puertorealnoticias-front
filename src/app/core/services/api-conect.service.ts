import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments';
import { News, Imagen } from '../interfaces/news.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiConectService {
  constructor(private http: HttpClient) {}

  obtenerNoticias(): Observable<News[]> {
    return this.http.get<News[]>(`${environment.baseUrl}/noticias/obtener`);
  }

  obtenerImagen(id: string): Observable<Imagen> {
    return this.http.get<Imagen>(`${environment.baseUrl}/imgs/obtener/${id}`);
  }

  filtrarPorCategoria(categoria: string): Observable<News[]> {
    return this.http.get<News[]>(
      `${environment.baseUrl}/noticias/filtrar/${categoria}`
    );
  }

  filtrarPrimeroCategoria(categoria: string): Observable<News> {
    return this.http.get<News>(
      `${environment.baseUrl}/noticias/obtener/first/${categoria}`
    );
  }
  filtrarExceptoUltimoCategoria(categoria: string): Observable<News[]> {
    return this.http.get<News[]>(
      `${environment.baseUrl}/noticias/obtener/excepto-ultimo/${categoria}`
    );
  }

  // Calcular la imagen
  public calcularUrl = (noticia: News) => {
    this.obtenerImagen(noticia.imagenPrincipal).subscribe(
      (imagen: Imagen) => {
        if (imagen.url) {
          noticia.imagenUrl = imagen.url;
        } else {
          console.error('La imagen no tiene URL');
        }
      },
      (error) => {
        console.error('Hubo un error al obtener la imagen', error);
      }
    );
  };
}
