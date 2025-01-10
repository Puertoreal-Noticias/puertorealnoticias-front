import { Component, Input, OnInit } from '@angular/core';
import { News, Imagen } from '../../interfaces/news.interface';
import { ApiConectService } from '../../services/api-conect.service';
import { Router } from '@angular/router';
import { Ad } from '../../interfaces/ad.interface';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss'],
})
export class LocalComponent implements OnInit {
  public categoria: string = 'local';
  public exceptoUltimasNoticias: News[] = [];
  public primeraNoticia: News | null = null;
  public limit: number = 4;
  @Input() anuncios: Ad[] = [];

  constructor(
    private ApiConectService: ApiConectService,
    private navigate: Router
  ) {}
  ngOnInit(): void {
    this.noticiaMasNueva();
    this.noticiasExceptoUltima();
  }

  // this.NewsHelper()

  public noticiasExceptoUltima = () => {
    this.ApiConectService.filtrarExceptoUltimoCategoria(
      this.categoria,
      this.limit
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
  public navigateNoticia(id: any) {
    this.navigate.navigate(['/noticia-detallada', id]);
  }
}
