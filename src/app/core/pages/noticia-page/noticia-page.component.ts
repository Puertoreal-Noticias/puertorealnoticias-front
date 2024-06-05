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
  public obtenerNoticia = (idNoticiaSeleccionada: string) => {
    this.ApiConectService.obtenerNoticiaId(idNoticiaSeleccionada).subscribe(
      (noticia) => {
        const categoria = noticia.categoria;
        this.ApiConectService.obtenerNoticiasRelacionadasRandom(
          categoria
        ).subscribe((noticiasRandom) => {
          // this.ApiConectService.calcularUrlImgRelacionada(noticiasRandom)
          this.noticiasRelacionadasRandom = noticiasRandom;
          noticiasRandom.forEach((noticia) => {
            this.ApiConectService.calcularUrl(noticia);
          });
          console.log('Noticias random', noticiasRandom);
        });

        this.noticiaSeleccionada = noticia;
        this.ApiConectService.calcularUrl(noticia);

        if (noticia.imagenes) {
          this.ApiConectService.calcularUrlImgRelacionada(noticia);
          console.log('noticiaSeleccionada imganeres relacionadas:', noticia);
        }
        console.log('noticiaSeleccionada sin imganeres relacionadas:', noticia);
      }
    );
  };
  public navigateNoticia(id: any) {
    this.router.navigate(['/noticia-detallada', id]);
  }
}
