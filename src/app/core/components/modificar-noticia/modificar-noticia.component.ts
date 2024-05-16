import { Component, OnInit } from '@angular/core';
import { News } from '../../interfaces/news.interface';
import { ActivatedRoute } from '@angular/router';
import { ApiConectService } from '../../services/api-conect.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modificar-noticia',
  templateUrl: './modificar-noticia.component.html',
  styleUrls: ['./modificar-noticia.component.scss'],
})
export class ModificarNoticiaComponent implements OnInit {
  public noticiaSeleccionada: News | null = null;
  formGroup!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private ApiConectService: ApiConectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.obtenerNoticia(id);
      }
    });
    this.formGroup = new FormGroup({
      titulo: new FormControl<string | null>(null),
      subtitulo: new FormControl<string | null>(null),
      contenido: new FormControl<string | null>(null),
      autor: new FormControl<string | null>(null),
    });
  }
  public obtenerNoticia = (id: string) => {
    this.ApiConectService.obtenerNoticiaId(id).subscribe((noticia) => {
      this.noticiaSeleccionada = noticia;
      this.ApiConectService.calcularUrl(this.noticiaSeleccionada);
    });
  };
  public modificarNoticia = () => {
    if (this.noticiaSeleccionada) {
      this.noticiaSeleccionada.titulo = this.formGroup.get('titulo')?.value;
      this.noticiaSeleccionada.subtitulo =
        this.formGroup.get('subtitulo')?.value;
      this.noticiaSeleccionada.contenido =
        this.formGroup.get('contenido')?.value;
      this.noticiaSeleccionada.autor = this.formGroup.get('autor')?.value;
      this.ApiConectService.modificarNoticia(
        this.noticiaSeleccionada
      ).subscribe((noticia) => {
        console.log(noticia);
      });
    }
  };
}
