import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConectService } from '../../services/api-conect.service';
import { News } from '../../interfaces/news.interface';

@Component({
  selector: 'app-seccion-noticia',
  templateUrl: './seccion-noticia.component.html',
  styleUrls: ['./seccion-noticia.component.scss'],
})
export class SeccionNoticiaComponent implements OnInit {
  public noticias: News[] = [];
  public limit: number = 10;
  constructor(
    private route: ActivatedRoute,
    private ApiConectService: ApiConectService
  ) {}
  ngOnInit(): void {
    const categoria = this.route.snapshot.paramMap.get('categoria');
    console.log(categoria);
    this.obtenerNoticias(categoria, this.limit);
  }
  public obtenerNoticias = (categoria: any, limit: number) => {
    this.ApiConectService.filtrarPorCategoria(categoria, limit).subscribe(
      (noticias) => {
        this.noticias = noticias;
        this.noticias.forEach((noticia) => {
          this.ApiConectService.calcularUrl(noticia);
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };
}
