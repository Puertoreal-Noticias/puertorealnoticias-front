import { Component } from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.scss'],
})
export class DeportesComponent {
  public categoryName: string = 'Deportes';
  public newsObjeto = [
    {
      id: 0,
      categoria: 'deportes',
      titular: 'La Peña Cadista de Puerto Real inaugura su nueva sede',
      img: 'assets/deportes/20240329_futbol_pena_cadista_inauguracion_01.jpg',
      redaccion: '29 De Marzo De 2024',
      subtitular:
        'La Peña del Cádiz CF en Puerto Real inaugura su nueva sede de la Calle Sagasta, tras su reorganización el pasado año.',
      notices: [
        {
          id: 0,
          img: 'assets/deportes/20240307_i_duatlon_cross_vdp_02-218x150.webp',
          titular:
            ' Los Toruños acogerá el 1 Duatlón Cross Villa de Puerto Real',
          redaccion: '8 De Marzo De 2024',
        },
        {
          id: 1,
          img: 'assets/deportes/20240307_i_duatlon_cross_vdp_02-218x150.webp',
          titular:
            ' Los Toruños acogerá el 1 Duatlón Cross Villa de Puerto Real',
          redaccion: '8 De Marzo De 2024',
        },
        {
          id: 2,
          img: 'assets/deportes/20240307_i_duatlon_cross_vdp_02-218x150.webp',
          titular:
            ' Los Toruños acogerá el 1 Duatlón Cross Villa de Puerto Real',
          redaccion: '8 De Marzo De 2024',
        },
      ],
    },
  ];
}
