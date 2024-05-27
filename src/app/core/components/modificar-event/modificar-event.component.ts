import { Component, OnInit } from '@angular/core';
import { Event } from '../../interfaces/events.interface';
import { EventConectService } from '../../services/event-conect.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modificar-event',
  templateUrl: './modificar-event.component.html',
  styleUrls: ['./modificar-event.component.scss'],
})
export class ModificarEventComponent implements OnInit {
  public eventoSeleccionado: Event | null = null;
  FormGroup!: FormGroup;
  constructor(
    private EventConectService: EventConectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.obtenerEvento(id);
      }
    });
    this.FormGroup = new FormGroup({
      titulo: new FormControl<string | null>(null),
      descripcion: new FormControl<string | null>(null),
      contenido: new FormControl<string | null>(null),
      fecha_acto: new FormControl<string | null>(null),
    });
  }
  public obtenerEvento = (id: string) => {
    this.EventConectService.obtenerEvento(id).subscribe((evento) => {
      this.eventoSeleccionado = evento;
      if (this.eventoSeleccionado) {
        this.EventConectService.obtenerImg(
          this.eventoSeleccionado.imagenPrincipal
        ).subscribe((img) => {
          this.eventoSeleccionado!.imagenUrl = img.url;
          console.log(this.eventoSeleccionado);
        });
      }
    });
  };
  public modificarNoticia = () => {
    if (this.eventoSeleccionado) {
      this.eventoSeleccionado.titulo = this.FormGroup.get('titulo')?.value;
      this.eventoSeleccionado.descripcion =
        this.FormGroup.get('descripcion')?.value;
      this.eventoSeleccionado.contenido =
        this.FormGroup.get('contenido')?.value;
      this.eventoSeleccionado.fecha_acto =
        this.FormGroup.get('fecha_acto')?.value;
      this.EventConectService.modificarEvento(
        this.eventoSeleccionado
      ).subscribe((evento) => {
        console.log(evento);
        this.router.navigateByUrl(
          '/noticia/gestor/admin/page/admitido/obtener-evento'
        );
      });
    }
  };
}
