import { Component, OnInit } from '@angular/core';
import { ApiConectService } from '../../services/api-conect.service';
import { News, Imagen } from '../../interfaces/news.interface';
@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.scss'],
})
export class CulturaComponent implements OnInit {
  public categoria: string = 'cultura';
  public exceptoUltimasNoticias: News[] = [];
  public primeraNoticia: News | null = null;
  constructor(private ApiConectService: ApiConectService) {}

  ngOnInit(): void {
    this.noticiaMasNueva();
    this.noticiasExceptoUltima();
  }
  public noticiasExceptoUltima = () => {
    this.ApiConectService.filtrarExceptoUltimoCategoria(
      this.categoria
    ).subscribe(
      (noticias) => {
        this.exceptoUltimasNoticias = noticias;
        this.exceptoUltimasNoticias.forEach((noticia) =>
          this.ApiConectService.calcularUrl(noticia)
        );
      },
      (error) => {
        console.error(error);
      }
    );
  };
  public noticiaMasNueva = () => {
    this.ApiConectService.filtrarPrimeroCategoria(this.categoria).subscribe(
      (noticia) => {
        this.primeraNoticia = noticia;
        this.ApiConectService.calcularUrl(this.primeraNoticia);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  // Agrega esta función en tu componente
  public formatearFecha = (fecha: Date) => {
    let fechaPublicacion = new Date(fecha);
    return fechaPublicacion.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
}
