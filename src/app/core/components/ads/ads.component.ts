import { Component, OnInit } from '@angular/core';
import { ApiConectService } from '../../services/api-conect.service';
import { Ad } from '../../interfaces/ad.interface';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  anuncios: Ad[] = [];

  constructor(private apiService: ApiConectService) {}

  ngOnInit(): void {
    this.obtenerAnuncios();
  }

  obtenerAnuncios(): void {
    this.apiService.obtenerAnuncios().subscribe(
      (ads: Ad[]) => {
        this.anuncios = ads;
        console.log('Anuncios recibidos en el componente:', ads);
      },
      (error) => {
        console.error('Error al obtener los anuncios:', error);
      }
    );
  }

  eliminarAnuncio(id: string): void {
    this.apiService.eliminarAnuncio(id).subscribe(
      (response) => {
        console.log('Anuncio eliminado:', response);
        this.obtenerAnuncios(); // Actualiza la lista de anuncios después de eliminar
      },
      (error) => {
        console.error('Error al eliminar el anuncio:', error);
      }
    );
  }
}
