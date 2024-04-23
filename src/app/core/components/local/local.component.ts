import { Component, OnInit } from '@angular/core';
import { News, Imagen } from '../../interfaces/news.interface';
import { ApiConectService } from '../../services/api-conect.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss'],
})
export class LocalComponent implements OnInit {
  public categoria: string = 'local';
  public noticiasLocal: News[] = [];

  constructor(private ApiConectService: ApiConectService) {}
  ngOnInit(): void {
    this.ApiConectService.filtrarPorCategoria(this.categoria).subscribe(
      (noticias) => {
        this.noticiasLocal = noticias;
        console.log(this.noticiasLocal);

        for (let noticia of this.noticiasLocal) {
          this.ApiConectService.obtenerImagen(
            noticia.imagenPrincipal
          ).subscribe(
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
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
