import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConectService } from '../../services/api-conect.service';
import { News } from '../../interfaces/news.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seccion-noticia',
  templateUrl: './seccion-noticia.component.html',
  styleUrls: ['./seccion-noticia.component.scss'],
})
export class SeccionNoticiaComponent implements OnInit {
  public noticias: News[] = [];
  public limit: number = 10;
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private ApiConectService: ApiConectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      const categoria = params['categoria'];
      console.log(categoria);
      this.obtenerNoticias(categoria, this.limit);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
  public obtenerNoticias = (categoria: any, limit: number) => {
    this.ApiConectService.filtrarPorCategoria(categoria, limit).subscribe(
      (noticias) => {
        this.noticias = noticias;
        this.noticias.forEach((noticia) => {
          this.ApiConectService.calcularUrl(noticia);
          console.log(noticias);
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };
  public formatearFecha = (fecha: Date) => {
    let fechaPublicacion = new Date(fecha);
    return fechaPublicacion.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  public navigateNoticia(id: any) {
    this.router.navigate(['/noticia-detallada', id]);
  }
}
