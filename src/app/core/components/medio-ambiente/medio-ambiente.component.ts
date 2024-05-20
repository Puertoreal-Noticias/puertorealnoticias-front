import { Component, OnInit } from '@angular/core';
import { ApiConectService } from '../../services/api-conect.service';
import { News, Imagen } from '../../interfaces/news.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-medio-ambiente',
  templateUrl: './medio-ambiente.component.html',
  styleUrls: ['./medio-ambiente.component.scss'],
})
export class MedioAmbienteComponent implements OnInit {
  public categoria: string = 'medioambiente';
  public noticias: News[] = [];
  public limit: number = 3;

  constructor(
    private ApiConectService: ApiConectService,
    private navigate: Router
  ) {}

  ngOnInit(): void {
    this.noticiasExceptoUltima();
  }
  public noticiasExceptoUltima = () => {
    this.ApiConectService.filtrarPorCategoria(
      this.categoria,
      this.limit
    ).subscribe(
      (noticias) => {
        this.noticias = noticias;
        this.noticias.forEach((noticia) =>
          this.ApiConectService.calcularUrl(noticia)
        );
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
