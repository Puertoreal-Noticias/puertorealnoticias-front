import { Component, OnInit } from '@angular/core';
import { News } from '../../interfaces/news.interface';
import { ApiConectService } from '../../services/api-conect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.scss'],
})
export class RecientesComponent implements OnInit {
  constructor(
    private ApiConectService: ApiConectService,
    private navigate: Router
  ) {}
  public noticiasRecientes: News[] = [];
  ngOnInit(): void {
    this.obtenerNoticias();
  }
  public obtenerNoticias = () => {
    this.ApiConectService.obtenerNoticias().subscribe((noticia) => {
      this.noticiasRecientes = noticia;
      this.noticiasRecientes.forEach((noticia) => {
        this.ApiConectService.calcularUrl(noticia);
      });
    });
  };
  public eliminarNoticia = (id: string) => {
    this.ApiConectService.eliminarNoticia(id).subscribe(() => {
      this.obtenerNoticias();
    });
    console.log('eliminar');
  };
  public modificarNoticia = (id: string) => {
    this.navigate.navigate([
      'noticia',
      'gestor',
      'admin',
      'page',
      'admitido',
      'modificar',
      id,
    ]);
  };
}
