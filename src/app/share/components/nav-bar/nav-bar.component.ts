import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private route: Router) {}
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

  public navigate(params: string) {
    console.log(params);
    this.route.navigateByUrl(`${params}`);
  }
}
