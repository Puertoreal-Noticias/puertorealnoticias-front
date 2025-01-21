import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obtener-noticia',
  templateUrl: './obtener-noticia.component.html',
  styleUrls: ['./obtener-noticia.component.scss'],
})
export class ObtenerNoticiaComponent {
  constructor(private router: Router) {}
  public obtenerType = [
    {
      id: 0,
      titulo: 'Por categoria',
      url: 'categoria',
    },
    {
      id: 1,
      titulo: 'Más Recientes',
      url: 'recientes',
    },
  ];

  public tipoNoticiaObtener = (ruta: string) => {
    this.router.navigateByUrl(
      `noticia/crear-noticias/admin/gestor/obtener/${ruta}`
    );
  };
}
