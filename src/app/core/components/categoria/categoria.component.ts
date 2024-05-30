import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria, News } from '../../interfaces/news.interface';
import { ApiConectService } from '../../services/api-conect.service';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  formGroup!: FormGroup;
  categoriaActual: string = 'politica';
  imagenControl = new FormControl(null);
  constructor(
    private ApiConectService: ApiConectService,
    private navigate: Router
  ) {}
  public noticiasSeleccionadas: News[] = [];
  public categorias: Categoria[] = [
    {
      id: 0,
      categoria: 'politica',
    },
    {
      id: 1,
      categoria: 'medioambiente',
    },
    {
      id: 2,
      categoria: 'local',
    },
    {
      id: 3,
      categoria: 'deportes',
    },
    {
      id: 4,
      categoria: 'cultura',
    },
  ];

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      categoria: new FormControl<string | null>(this.categoriaActual),
    });
    this.solicitarNoticias(this.categoriaActual);
  }

  public solicitarNoticias = (categoria: string) => {
    this.categoriaActual = categoria; // Actualiza la categoría actual cada vez que solicitas noticias
    console.log(categoria);
    this.ApiConectService.filtrarPorCategoria(categoria).subscribe(
      (noticia) => {
        this.noticiasSeleccionadas = noticia;
        this.noticiasSeleccionadas.forEach((noticiaIndividual) =>
          this.ApiConectService.calcularUrl(noticiaIndividual)
        );
        console.log(this.noticiasSeleccionadas);
      }
    );
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
        this.solicitarNoticias(this.categoriaActual); // Usa la categoría actual cuando eliminas una noticia
      });
  };
  public modificarNoticia = (id: string) => {
    this.navigate.navigate([
      'noticia',
      'gestor',
      'admin',
      'page',
      'admitido',
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
      this.solicitarNoticias(this.categoriaActual); // Usa la categoría actual cuando eliminas una noticia
    });
  };
  public addImgsToNoticia = (id: string) => {
    if (id === null) {
      return;
    }
    this.navigate.navigate([
      'noticia',
      'gestor',
      'admin',
      'page',
      'admitido',
      'añadir-imgs-noticia',
      id,
    ]); // Usa la categoría actual cuando eliminas una noticia
  };
  // public submitCategory
}
