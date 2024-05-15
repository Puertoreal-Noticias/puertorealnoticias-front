import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegador-gestor',
  templateUrl: './navegador-gestor.component.html',
  styleUrls: ['./navegador-gestor.component.scss'],
})
export class NavegadorGestorComponent {
  constructor(private route: Router) {}
  public navGestorNoticias = [
    {
      id: 0,
      titulo: 'Añadir noticia',
      url: 'añadir',
    },
    {
      id: 1,
      titulo: 'obtener noticia',
      url: 'obtener',
    },
  ];
  public cambiarRuta = (ruta: string) => {
    console.log('ha entrao');
    this.route.navigateByUrl(`noticia/gestor/admin/page/admitido/${ruta}`);
  };
}
