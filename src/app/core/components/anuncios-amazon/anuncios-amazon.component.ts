// anuncios-amazon.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Ad } from '../../interfaces/ad.interface';
import { ApiConectService } from '../../services/api-conect.service';

@Component({
  selector: 'app-anuncios-amazon',
  templateUrl: './anuncios-amazon.component.html',
  styleUrls: ['./anuncios-amazon.component.scss'],
})
export class AnunciosAmazonComponent implements OnInit {
  @Input() grupo: number = 1; // Nuevo Input para determinar el grupo
  anuncios: Ad[] = [];

  constructor(private apiService: ApiConectService) {}

  ngOnInit(): void {
    this.obtenerAnuncios(4); // Obteniendo los últimos 4 anuncios
  }

  obtenerAnuncios(limit: number): void {
    this.apiService.obtenerAnuncios(limit).subscribe(
      (ads: Ad[]) => {
        this.dividirAnuncios(ads, this.grupo);
        console.log('Anuncios recibidos en el componente:', ads);
      },
      (error) => {
        console.error('Error al obtener los anuncios:', error);
      }
    );
  }

  dividirAnuncios(ads: Ad[], grupo: number): void {
    const mitad = Math.ceil(ads.length / 2);
    if (grupo === 1) {
      this.anuncios = ads.slice(0, mitad);
    } else if (grupo === 2) {
      this.anuncios = ads.slice(mitad, ads.length);
    }
  }
}
