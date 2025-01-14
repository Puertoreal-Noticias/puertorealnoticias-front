import { Component, OnInit } from '@angular/core';
import { ApiConectService } from '../../services/api-conect.service';
import { Ad } from '../../interfaces/ad.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  anunciosSeccion1: Ad[] = [];
  anunciosSeccion2: Ad[] = [];

  constructor(private apiService: ApiConectService) {}

  ngOnInit(): void {
    this.obtenerAnuncios(); // Obteniendo los últimos 4 anuncios
  }

  obtenerAnuncios(): void {
    this.apiService.obtenerAnuncios(4).subscribe(
      (ads: Ad[]) => {
        this.anunciosSeccion1 = ads.slice(0, 2);
        this.anunciosSeccion2 = ads.slice(2, 4);
        console.log('Anuncios recibidos en el componente:', ads);
      },
      (error) => {
        console.error('Error al obtener los anuncios:', error);
      }
    );
  }
}
