import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria, News } from '../../interfaces/news.interface';
import { ApiConectService } from '../../services/api-conect.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private ApiConectService: ApiConectService) {}
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
  public btnsCrud = [
    {
      id: 0,
      text: 'Modificar noticia',
    },
    {
      id: 1,
      text: 'Eliminar noticia',
    },
  ];
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      categoria: new FormControl<string | null>('politica'),
    });
    this.solicitarNoticias(this.formGroup.value.categoria);
  }

  public solicitarNoticias = (categoria: string) => {
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
  // public submitCategory
}
