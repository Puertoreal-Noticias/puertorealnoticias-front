import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConectService } from '../../../core/services/api-conect.service';
import { News } from 'src/app/core/interfaces/news.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public limit: number = 1;
  public new: News[] = [];
  public categoria: string = 'importante';
  constructor(
    private route: Router,
    private ApiConectService: ApiConectService
  ) {}
  ngOnInit(): void {
    this.obtenerImg();
  }

  public navBarElements = [
    {
      id: 0,
      title: 'Inicio',
      url: '',
    },
    {
      id: 1,
      title: 'Local',
      url: '/tipo-noticia/local',
    },
    {
      id: 2,
      title: 'Política',
      url: '/tipo-noticia/politica',
    },
    {
      id: 3,
      title: 'Deportes',
      url: '/tipo-noticia/deportes',
    },
    {
      id: 4,
      title: 'Cultura',
      url: '/tipo-noticia/cultura',
    },
    {
      id: 5,
      title: 'Medio ambiente',
      url: '/tipo-noticia/medioambiente',
    },
  ];
  public obtenerImg = () => {
    this.ApiConectService.filtrarPorCategoria(
      this.categoria,
      this.limit
    ).subscribe((noticia) => {
      this.new = noticia;
      this.new.forEach((ele) => {
        this.ApiConectService.calcularUrl(ele);
      });
    });
  };
  public navigate(params: string) {
    this.route.navigateByUrl(`${params}`);
  }
}
