import { Component, OnInit } from '@angular/core';
import { ApiConectService } from '../../services/api-conect.service';
import { Ad } from '../../interfaces/ad.interface';

@Component({
  selector: 'app-anuncios-amazon',
  templateUrl: './anuncios-amazon.component.html',
  styleUrls: ['./anuncios-amazon.component.scss'],
})
export class AnunciosAmazonComponent implements OnInit {
  anuncios: Ad[] = [];

  constructor(private apiService: ApiConectService) {}

  ngOnInit(): void {
    this.obtenerAnuncios(2); // Obteniendo solo 2 anuncios
  }

  obtenerAnuncios(limit: number): void {
    this.apiService.obtenerAnuncios(limit).subscribe(
      (ads: Ad[]) => {
        this.anuncios = ads;
        console.log('Anuncios recibidos en el componente:', ads);
      },
      (error) => {
        console.error('Error al obtener los anuncios:', error);
      }
    );
  }
}
