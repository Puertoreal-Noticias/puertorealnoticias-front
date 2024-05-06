import { Component, OnInit } from '@angular/core';
import { News, Imagen } from '../../interfaces/news.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConectService } from '../../services/api-conect.service';

@Component({
  selector: 'app-noticia-page',
  templateUrl: './noticia-page.component.html',
  styleUrls: ['./noticia-page.component.scss'],
})
export class NoticiaPageComponent implements OnInit {
  public newId: string | null = null;
  public noticiaSeleccionada: News | null = null;
  public noticiasRelacionadasRandom: News[] = [];
  constructor(
    private route: ActivatedRoute,
    private ApiConectService: ApiConectService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.newId = id;
        this.obtenerNoticia(this.newId);
      }
    });
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
    this.noticiaSeleccionada?.imagenes.forEach((imagenId: string) => {
      this.ApiConectService.obtenerImagen(imagenId).subscribe(
        (imagen: Imagen) => {
          if (imagen.url) {
            if (this.noticiaSeleccionada) {
              if (!this.noticiaSeleccionada.imagenesUrl) {
                this.noticiaSeleccionada.imagenesUrl = [];
              }
              this.noticiaSeleccionada.imagenesUrl.push(imagen.url);
            }
          }
        },
        (error) => {
          console.error('Hubo un error al obtener la imagen', error);
        }
      );
    });
  };

  public calcularUrlArticulosRelacionados = (noticia: News) => {
    this.ApiConectService.calcularUrl(noticia);
  };

  public obtenerNoticia = (id: string) => {
    this.ApiConectService.obtenerNoticiaId(id).subscribe((noticia: News) => {
      this.noticiaSeleccionada = noticia;
      this.ApiConectService.obtenerNoticiasRelacionadasRandom(
        `${this.noticiaSeleccionada?.categoria}`
      ).subscribe(
        (noticias) => {
          this.noticiasRelacionadasRandom = noticias;
          console.log('Noticias random', this.noticiasRelacionadasRandom);
          this.noticiasRelacionadasRandom.forEach((noticia) => {
            this.calcularUrlArticulosRelacionados(noticia);
          });
          // Utiliza noticiasRelacionadasRandom aquí si es necesario
        },
        (error) => {
          console.error(
            'Hubo un error al obtener las noticias relacionadas',
            error
          );
        }
      );
      this.calcularUrl(this.noticiaSeleccionada);
    });
  };
  public navigateNoticia(id: any) {
    this.router.navigate(['/noticia-detallada', id]);
  }
}
