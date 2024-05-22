import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConectService } from '../../../core/services/api-conect.service';
import { News } from 'src/app/core/interfaces/news.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  private menuVisible = new BehaviorSubject<boolean>(false);
  public $menuVisible: Observable<boolean> = this.menuVisible.asObservable();
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
      url: '/',
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
    {
      id: 6,
      title: 'Eventos',
      url: '/eventos-puerto-real',
    },
    {
      id: 7,
      title: 'Tiempo',
      url: '/tiempo',
    },
  ];
  public redesSociales = [
    { id: 0, title: 'facebook', url: '', img: 'pi pi-facebook' },
    { id: 1, title: 'instagram', url: '', img: 'pi pi-facebook' },
    { id: 2, title: 'instagram', url: '', img: 'pi pi-facebook' },
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
  public showMenu = () => {
    this.menuVisible.next(true);
    console.log(this.menuVisible);
  };
  public hideMenu = (event?: MouseEvent) => {
    event?.stopPropagation();
    this.menuVisible.next(false);
    console.log('cierrate');
  };

  public navigateAndHideMenu = (ruta?: string) => {
    this.menuVisible.next(false);
    if (ruta) {
      this.route.navigateByUrl(ruta);
    }
  };
}
