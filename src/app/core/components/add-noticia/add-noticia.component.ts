import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiConectService } from '../../services/api-conect.service';
import { AddNews, News } from '../../interfaces/news.interface';

@Component({
  selector: 'app-add-noticia',
  templateUrl: './add-noticia.component.html',
  styleUrls: ['./add-noticia.component.scss'],
})
export class AddNoticiaComponent implements OnInit {
  constructor(private ApiConectService: ApiConectService) {}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      titulo: new FormControl(),
      subtitulo: new FormControl(),
      contenido: new FormControl(),
      autor: new FormControl(),
      categoria: new FormControl(),
      imagen: new FormControl(),
      destacado: new FormControl(),
    });
  }
  formGroup!: FormGroup;
  public categoriasDisponibles = [
    {
      id: 0,
      nombre: 'deportes',
    },
    {
      id: 1,
      nombre: 'cultura',
    },
    {
      id: 2,
      nombre: 'politica',
    },
    {
      id: 3,
      nombre: 'medioambiente',
    },
    {
      id: 4,
      nombre: 'local',
    },
  ];
  addNoticia() {
    const noticia: AddNews = {
      titulo: this.formGroup.get('titulo')?.value,
      subtitulo: this.formGroup.get('subtitulo')?.value,
      contenido: this.formGroup.get('contenido')?.value,
      autor: this.formGroup.get('autor')?.value,
      categoria: this.formGroup.get('categoria')?.value,
      destacado: this.formGroup.get('destacado')?.value,
    };

    this.ApiConectService.agregarNoticia(noticia).subscribe((res) => {
      console.log(res);
    });
    this.ApiConectService.addImgToNoticia(
      'id',
      this.formGroup.value.imagen
    ).subscribe((res) => {
      console.log(res);
    });
  }
}
