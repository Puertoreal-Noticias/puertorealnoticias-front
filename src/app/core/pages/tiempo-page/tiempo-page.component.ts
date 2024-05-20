import { Component, OnInit } from '@angular/core';
import { ApiConectService } from '../../services/api-conect.service';
import { Tiempo } from '../../interfaces/tiempo.inteface';

@Component({
  selector: 'app-tiempo-page',
  templateUrl: './tiempo-page.component.html',
  styleUrls: ['./tiempo-page.component.scss'],
})
export class TiempoPageComponent implements OnInit {
  public tiempo: Tiempo[] = [];
  public backgroundImg: string = '';

  constructor(private ApiConectService: ApiConectService) {}
  ngOnInit(): void {
    this.obtenerNoticias();
  }
  public obtenerNoticias = () => {
    this.ApiConectService.obtenerNoticiasPuertoReal().subscribe((tiempo) => {
      this.tiempo.push(tiempo);
      this.backgroundImg = this.setBackground(); // Asigna backgroundImg después de llenar this.tiempo
      console.log(this.tiempo);
    });
  };
  public kelvinToCelsius(kelvin: number): number {
    return parseFloat((kelvin - 273.15).toFixed(0));
  }

  public mpsToKmph(mps: number): number {
    return parseFloat((mps * 3.6).toFixed(2));
  }
  setBackground() {
    let weatherCondition = this.tiempo[0].weather[0].main; // Asegúrate de que 'tiempo' tenga los datos correctos
    let weatherId = this.tiempo[0].weather[0].id;
    let background = '';

    switch (true) {
      case weatherCondition === 'Clear':
        background = '/assets/tiempo/backgrounds/soleado.jpg';
        break;
      case weatherCondition === 'Clouds':
        background =
          weatherId === 801
            ? '/assets/tiempo/backgrounds/algoDenubes.webp'
            : weatherId === 802
            ? '/assets/tiempo/backgrounds/masNubes.jpg'
            : weatherId >= 803 && weatherId <= 804
            ? '/assets/tiempo/backgrounds/muchisimasNubes.jpg'
            : '/assets/tiempo/backgrounds/algoDenubes.webp';
        break;
      case weatherCondition === 'Rain':
        background =
          weatherId === 500
            ? '/assets/tiempo/backgrounds/pocaLluvia.webp'
            : weatherId === 501
            ? '/assets/tiempo/backgrounds/muchisimaLluvia.jpg'
            : weatherId >= 502 && weatherId <= 531
            ? '/assets/tiempo/backgrounds/muchisimaLluvia.jpg'
            : '/assets/tiempo/backgrounds/pocaLluvia.webp';
        break;
      case weatherCondition === 'Snow':
        background = '/assets/tiempo/backgrounds/pocanieve.webp';
        break;
      default:
        background = '/assets/tiempo/backgrounds/soleado.jpg';
    }
    return background;
  }
}
