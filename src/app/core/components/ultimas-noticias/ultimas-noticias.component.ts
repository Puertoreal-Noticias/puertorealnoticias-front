import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConectService } from '../../services/api-conect.service';
import { News, Imagen } from '../../interfaces/news.interface';

@Component({
  selector: 'app-ultimas-noticias',
  templateUrl: './ultimas-noticias.component.html',
  styleUrls: ['./ultimas-noticias.component.scss'],
})
export class UltimasNoticiasComponent implements OnInit {
  public spanLastNews: string = 'Últimas entradas';
  public noticiaDestacada: News | null = null;
  public nuevasNoticias: News[] = [];
  public limit: number = 6;
  constructor(
    private navigate: Router,
    private ApiConectService: ApiConectService
  ) {}

  ngOnInit(): void {
    this.noticiaDestacadaFuncion();
    this.ultimasNoticiasMenosDestacada();
  }
  public ultimasNoticiasMenosDestacada = () => {
    this.ApiConectService.obtenerNoticias(this.limit).subscribe(
      (response: News[]) => {
        // Asegúrate de que la respuesta es un array de noticias
        this.nuevasNoticias = response;
        // Para cada noticia, obtener la imagen principal
        for (let noticia of this.nuevasNoticias) {
          this.ApiConectService.calcularUrl(noticia);
        }
      },
      (error) => {
        console.error('Hubo un error al obtener los datos', error);
      }
    );
  };
  public noticiaDestacadaFuncion = () => {
    this.ApiConectService.obtenerNoiticiaDestacada().subscribe(
      (noticia: News) => {
        this.noticiaDestacada = noticia;
        this.ApiConectService.calcularUrl(noticia);
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
    this.navigate.navigate(['/noticia-detallada', id]);
  }
}
