import { Component, OnInit } from '@angular/core';
import { News, Imagen } from '../../interfaces/news.interface';
import { ApiConectService } from '../../services/api-conect.service';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.scss'],
})
export class PoliticaComponent implements OnInit {
  public categoria: string = 'politica';
  public news: News[] = [];
  constructor(private ApiConectService: ApiConectService) {}
  ngOnInit(): void {
    this.obtenerNoticias();
  }
  public calcularUrl = (noticia: News) => {
    this.ApiConectService.obtenerImagen(noticia.imagenPrincipal).subscribe(
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
  public obtenerNoticias = () => {
    this.ApiConectService.filtrarPorCategoria(this.categoria).subscribe(
      (noticias) => {
        this.news = noticias;
        this.news.forEach((noticia) => {
          this.calcularUrl(noticia);
        });
        console.log(this.news);
      },
      (error) => {
        console.error(error);
      }
    );
  };
}
