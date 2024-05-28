import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments';
import { News, Imagen, AddNews } from '../interfaces/news.interface';
import { Tiempo } from '../interfaces/tiempo.inteface';
@Injectable({
  providedIn: 'root',
})
export class ApiConectService {
  constructor(private http: HttpClient) {}

  obtenerNoticias(limit?: number): Observable<News[]> {
    return this.http.get<News[]>(
      `${environment.baseUrl}/noticias/obtener?limit=${limit}`
    );
  }
  obtenerRecientes(limit?: number): Observable<News[]> {
    return this.http.get<News[]>(
      `${environment.baseUrl}/noticias/obtener/recientes?limit=${limit}`
    );
  }
  eliminarNoticia(id: string): Observable<string> {
    return this.http.delete<string>(
      `${environment.baseUrl}/noticias/eliminar/${id}`,
      { responseType: 'text' as 'json' }
    );
  }
  modificarNoticia(noticia: News): Observable<string> {
    return this.http.patch<string>(
      `${environment.baseUrl}/noticias/modificar/${noticia._id}`,
      noticia,
      { responseType: 'text' as 'json' }
    );
  }
  agregarNoticia(noticia: AddNews): Observable<News> {
    return this.http.post<News>(
      `${environment.baseUrl}/noticias/create-new`,
      noticia
    );
  }
  addImgToNoticia(id: string, img: File): Observable<Imagen> {
    const formData = new FormData();
    formData.append('imagen', img);
    return this.http.post<Imagen>(
      `${environment.baseUrl}/news-imgs/upload/${id}`,
      formData
    );
  }
  obtenerNoiticiaDestacada(limit: number = 1): Observable<News> {
    return this.http.get<News>(
      `${environment.baseUrl}/noticias/obtener/destacada?limit=${limit}`
    );
  }
  obtenerImagen(id: string): Observable<Imagen> {
    return this.http.get<Imagen>(
      `${environment.baseUrl}/news-imgs/obtener/${id}`
    );
  }
  obtenerNoticiaId(id: string): Observable<News> {
    return this.http.get<News>(`${environment.baseUrl}/noticias/obtener/${id}`);
  }
  filtrarPorCategoria(categoria: string, limit?: number): Observable<News[]> {
    return this.http.get<News[]>(
      `${environment.baseUrl}/noticias/filtrar/${categoria}?limit=${limit}`
    );
  }
  obtenerNoticiasRelacionadasRandom(categoria: string): Observable<News[]> {
    return this.http.get<News[]>(
      `${environment.baseUrl}/noticias/obtener/random/${categoria}`
    );
  }
  filtrarPrimeroCategoria(categoria: string): Observable<News> {
    return this.http.get<News>(
      `${environment.baseUrl}/noticias/obtener/first/${categoria}`
    );
  }
  filtrarExceptoUltimoCategoria(
    categoria: string,
    limit?: number
  ): Observable<News[]> {
    return this.http.get<News[]>(
      `${environment.baseUrl}/noticias/obtener/excepto-ultimo/${categoria}?limit=${limit}`
    );
  }
  obtenerNoticiasPuertoReal(): Observable<Tiempo> {
    return this.http.get<Tiempo>(`${environment.baseUrlTiempo}`);
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
  modificarImgToNoticia(id: string, img: File): Observable<Imagen> {
    const formData = new FormData();
    formData.append('imagen', img);
    return this.http.put<Imagen>(
      `${environment.baseUrl}/news-imgs/actualizar/${id}`,
      formData
    );
  }
}
