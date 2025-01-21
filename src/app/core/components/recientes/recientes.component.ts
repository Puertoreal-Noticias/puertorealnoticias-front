import { Component, OnInit } from '@angular/core';
import { News } from '../../interfaces/news.interface';
import { ApiConectService } from '../../services/api-conect.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.scss'],
})
export class RecientesComponent implements OnInit {
  constructor(
    private ApiConectService: ApiConectService,
    private navigate: Router
  ) {}
  imagenControl = new FormControl(null);
  public noticiasRecientes: News[] = [];
  ngOnInit(): void {
    this.obtenerNoticias();
  }
  public obtenerNoticias = () => {
    this.ApiConectService.obtenerRecientes().subscribe((noticia) => {
      this.noticiasRecientes = noticia;
      this.noticiasRecientes.forEach((noticia) => {
        this.ApiConectService.calcularUrl(noticia);
      });
      console.log('noticias recientes', this.noticiasRecientes);
    });
  };
  public eliminarNoticia = (id: string) => {
    this.ApiConectService.eliminarNoticia(id)
      .pipe(
        catchError((error) => {
          console.error('Error al eliminar la noticia:', error);
          return of(); // Devuelve un observable vacío para que la cadena de observables pueda continuar
        })
      )
      .subscribe(() => {
        this.obtenerNoticias();
      });
  };
  public modificarNoticia = (id: string) => {
    this.navigate.navigate([
      'noticia',
      'crear-noticias',
      'admin',
      'gestor',
      'modificar',
      id,
    ]);
  };
  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imagenControl.setValue(file);
    }
  }
  public cambiarImg = (id: string) => {
    const img = this.imagenControl.value;
    console.log(id, img);
    if (img === null) {
      return;
    }
    this.ApiConectService.modificarImgToNoticia(id, img).subscribe(() => {
      this.obtenerNoticias();
    });
  };
}
