import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia-page',
  templateUrl: './noticia-page.component.html',
  styleUrls: ['./noticia-page.component.scss'],
})
export class NoticiaPageComponent {
  public noticiaUp = [
    {
      id: 0,
      categoria: 'Cultura',
      titular: '"Puertas Abiertas", nueva exposición de La máquina creativa',
      redaccion: '3 De Abril De 2024',
      img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
      parrafo:
        'Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.',
    },
  ];
  public articulosRelacionados = [
    {
      id: 0,
      categoria: 'Empleo',
      titular: 'Desciende el paro en 1,14% en Puerto Real en el mes de Marzo',
      img: '/assets/noticias/20180202_sae_empleo.jpg',

      url: '',
    },
    {
      id: 1,
      categoria: 'Empleo',
      titular: 'Desciende el paro en 1,14% en Puerto Real en el mes de Marzo',
      img: '/assets/noticias/20180202_sae_empleo.jpg',

      url: '',
    },
    {
      id: 2,
      categoria: 'Empleo',
      titular: 'Desciende el paro en 1,14% en Puerto Real en el mes de Marzo',
      img: '/assets/noticias/20180202_sae_empleo.jpg',

      url: '',
    },
  ];
}
