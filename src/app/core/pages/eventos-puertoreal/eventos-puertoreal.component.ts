import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos-puertoreal',
  templateUrl: './eventos-puertoreal.component.html',
  styleUrls: ['./eventos-puertoreal.component.scss'],
})
export class EventosPuertorealComponent {
  public eventos = [
    {
      id: 0,
      title: 'Evento 1',
      fecha: '2021-10-01',
      descripcion:
        'Descripcion del evento 1 Descripcion del evento 1 Descripcion del evento 1 Descripcion del evento 1',
      img: '/assets/cultura/20200627_dia_villa_01.jpg',
    },
    {
      id: 1,
      title: 'Evento 2',
      fecha: '2021-08-11',
      descripcion: 'Descripcion del evento 2',
      img: '/assets/cultura/20200627_dia_villa_01.jpg',
    },
    {
      id: 2,
      title: 'Evento 3',
      fecha: '2021-01-11',
      descripcion: 'Descripcion del evento 3',
      img: '/assets/cultura/20200627_dia_villa_01.jpg',
    },
    {
      id: 3,
      title: 'Evento 4',
      fecha: '2021-10-15',
      descripcion: 'Descripcion del evento 4',
      img: '/assets/cultura/20200627_dia_villa_01.jpg',
    },
  ];
}
