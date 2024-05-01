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
      url: '',
    },
    {
      id: 2,
      title: 'Política',
      url: '',
    },
    {
      id: 3,
      title: 'Deportes',
      url: '',
    },
    {
      id: 4,
      title: 'Cultura',
      url: '',
    },
    {
      id: 5,
      title: 'Medio ambiente',
      url: '',
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
      console.log('navbar', this.new);
    });
  };
  public navigate(params: string) {
    console.log(params);
    this.route.navigateByUrl(`${params}`);
  }
}
