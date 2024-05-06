import { Component, OnInit } from '@angular/core';
import { News, Imagen } from '../../interfaces/news.interface';
import { ApiConectService } from '../../services/api-conect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.scss'],
})
export class PoliticaComponent implements OnInit {
  public categoria: string = 'politica';
  public news: News[] = [];
  public limit: number = 6;
  constructor(
    private ApiConectService: ApiConectService,
    private navigate: Router
  ) {}
  ngOnInit(): void {
    this.obtenerNoticias();
  }
  public obtenerNoticias = () => {
    this.ApiConectService.filtrarPorCategoria(
      this.categoria,
      this.limit
    ).subscribe(
      (noticias) => {
        this.news = noticias;
        this.news.forEach((noticia) => {
          this.ApiConectService.calcularUrl(noticia);
        });
        console.log(this.news);
      },
      (error) => {
        console.error(error);
      }
    );
  };
  public navigateNoticia(id: any) {
    this.navigate.navigate(['/noticia-detallada', id]);
  }
}
