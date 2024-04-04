import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  public navBarElements = [
    {
      id: 0,
      title: 'Elemento 1',
      url: '',
    },
    {
      id: 1,
      title: 'Elemento 2',
      url: '',
    },
    {
      id: 2,
      title: 'Elemento 3',
      url: '',
    },
    {
      id: 3,
      title: 'Elemento 4',
      url: '',
    },
  ];
}
