import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ultimas-noticias',
  templateUrl: './ultimas-noticias.component.html',
  styleUrls: ['./ultimas-noticias.component.scss'],
})
export class UltimasNoticiasComponent {
  public spanLastNews: string = 'Útimas entradas';
  public nuevasNoticias = [
    {
      id: 0,
      categoria: 'cultura',
      title: '"Puertas Abiertas", nueva exposición de La Máquina Creativa',
      img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
      redaccion: 'Redaccion - 3 De Abril De 2024',
    },
    {
      id: 1,
      categoria: 'cultura',
      title: '"Puertas Abiertas", nueva exposición de La Máquina Creativa',
      img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
      redaccion: 'Redaccion - 3 De Abril De 2024',
    },
    {
      id: 2,
      categoria: 'cultura',
      title: '"Puertas Abiertas", nueva exposición de La Máquina Creativa',
      img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
      redaccion: 'Redaccion - 3 De Abril De 2024',
    },
    {
      id: 3,
      categoria: 'cultura',
      title: '"Puertas Abiertas", nueva exposición de La Máquina Creativa',
      img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
      redaccion: 'Redaccion - 3 De Abril De 2024',
    },
    {
      id: 4,
      categoria: 'cultura',
      title: '"Puertas Abiertas", nueva exposición de La Máquina Creativa',
      img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
      redaccion: 'Redaccion - 3 De Abril De 2024',
    },
    {
      id: 5,
      categoria: 'cultura',
      title: '"Puertas Abiertas", nueva exposición de La Máquina Creativa',
      img: '/assets/20240403_cultura_puertas_abiertas_maquina_creativa_.jpg',
      redaccion: 'Redaccion - 3 De Abril De 2024',
    },
  ];
  constructor(private navigate: Router) {}

  public navigateNoticia() {
    this.navigate.navigateByUrl('noticiaDetail');
  }
}
