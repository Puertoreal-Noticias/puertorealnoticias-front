import { Component, OnInit } from '@angular/core';
import { News, Imagen } from '../../interfaces/news.interface';
import { ActivatedRoute } from '@angular/router';
import { ApiConectService } from '../../services/api-conect.service';

@Component({
  selector: 'app-noticia-page',
  templateUrl: './noticia-page.component.html',
  styleUrls: ['./noticia-page.component.scss'],
})
export class NoticiaPageComponent implements OnInit {
  public newId: string | null = null;
  public noticiaSeleccionada: News | null = null;
  constructor(
    private route: ActivatedRoute,
    private ApiConectService: ApiConectService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.newId = id;
      this.obtenerNoticia(this.newId);
    }
  }

  public calcularUrl = (noticia: News) => {
    this.ApiConectService.obtenerImagen(noticia.imagenPrincipal).subscribe(
      (imagen: Imagen) => {
        if (imagen.url) {
          noticia.imagenUrl = imagen.url;
        } else {
          console.error('La imagen no tiene URL');
        }
      },
      (error) => {
        console.error('Hubo un error al obtener la imagen', error);
      }
    );
  };
  public obtenerNoticia = (id: string) => {
    this.ApiConectService.obtenerNoticiaId(id).subscribe((noticia: News) => {
      this.noticiaSeleccionada = noticia;
      console.log('Noticia seleccionada', this.noticiaSeleccionada);
      this.calcularUrl(noticia);
    });
  };
  // public noticiaUp = [
  //   {
  //     id: 0,
  //     categoria: 'Cultura',
  //     titular: '"Puertas Abiertas", nueva exposición de La máquina creativa',
  //     redaccion: '3 De Abril De 2024',
  //     img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
  //     galeria: [
  //       {
  //         id: 0,
  //         img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
  //       },
  //       {
  //         id: 1,
  //         img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
  //       },
  //       {
  //         id: 2,
  //         img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
  //       },
  //       {
  //         id: 3,
  //         img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
  //       },
  //       {
  //         id: 4,
  //         img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
  //       },
  //       {
  //         id: 5,
  //         img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
  //       },
  //     ],
  //     parrafo:
  //       'Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.Texto de ejemplo ficticio, solo para demostrar contenido.',
  //   },
  // ];

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
