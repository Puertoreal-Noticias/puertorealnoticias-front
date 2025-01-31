import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments';
import { News, Imagen, AddNews } from '../interfaces/news.interface';
import { Tiempo } from '../interfaces/tiempo.inteface';
import { Ad } from '../interfaces/ad.interface';
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
  // obtenerAnuncios(): Observable<Ad[]> {
  //   return this.http.get<Ad[]>(`${environment.baseUrl}/anuncios/obtener`);
  // }
  obtenerAnuncios(limit?: number): Observable<Ad[]> {
    return this.http.get<Ad[]>(
      `${environment.baseUrl}/anuncios/obtener?limit=${limit}`
    );
  }
  crearAnuncio(anuncio: FormData): Observable<Ad> {
    return this.http.post<Ad>(`${environment.baseUrl}/anuncios/crear`, anuncio);
  }
  eliminarAnuncio(id: string): Observable<string> {
    return this.http.delete<string>(
      `${environment.baseUrl}/anuncios/eliminar/${id}`,
      { responseType: 'text' as 'json' }
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

  addImgRelacionadaToNoticia(id: string, img: File): Observable<Imagen> {
    const formData = new FormData();
    formData.append('imagen', img);
    return this.http.post<Imagen>(
      `${environment.baseUrl}/news-imgs/add-img-relacionada/${id}`,
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
  eliminarImgRelacionada(id: string, idImg: string): Observable<string> {
    return this.http.delete<string>(
      `${environment.baseUrl}/news-imgs/delete-img-relacionada/${id}/${idImg}`,
      { responseType: 'text' as 'json' }
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

  calcularUrlImgRelacionada = (noticia: News) => {
    if (!noticia.imagenesUrl) {
      noticia.imagenesUrl = []; // Inicializa el array solo si es undefined
    }

    console.log('Antes de procesar imágenes:', noticia);

    noticia.imagenes.forEach((imagenId) => {
      this.obtenerImagen(imagenId).subscribe(
        (imagen: Imagen) => {
          console.log(`Imagen obtenida para ID ${imagenId}:`, imagen);
          if (imagen && imagen.url) {
            noticia.imagenesUrl!.push({ url: imagen.url, id: imagenId });
            console.log('Imagen agregada a imagenesUrl:', noticia.imagenesUrl);
          } else {
            console.error(`La imagen con ID ${imagenId} no tiene URL válida.`);
          }
        },
        (error) => {
          console.error(
            `Error al obtener la imagen con ID ${imagenId}:`,
            error
          );
        }
      );
    });

    console.log(
      'Después de iniciar la carga de imágenes:',
      noticia.imagenesUrl
    );
  };

  // calcularUrlImgRelacionada = (noticia: News) => {
  //   if (!noticia.imagenesUrl) {
  //     noticia.imagenesUrl = []; // Inicializa el array solo si es undefined
  //   }
  //   noticia.imagenes.forEach((imagenId) => {
  //     this.obtenerImagen(imagenId).subscribe(
  //       (imagen: Imagen) => {
  //         if (imagen && imagen.url) {
  //           // Verifica que imagen y imagen.url estén definidos
  //           noticia.imagenesUrl!.push({ url: imagen.url, id: imagenId }); // Almacena la URL y el ID de la imagen
  //         } else {
  //           console.error('La imagen no tiene URL o la respuesta es undefined');
  //         }
  //       },
  //       (error) => {
  //         console.error('Hubo un error al obtener la imagen', error);
  //       }
  //     );
  //   });
  // };
  modificarImgToNoticia(id: string, img: File): Observable<Imagen> {
    const formData = new FormData();
    formData.append('imagen', img);
    return this.http.put<Imagen>(
      `${environment.baseUrl}/news-imgs/actualizar/${id}`,
      formData
    );
  }
}
