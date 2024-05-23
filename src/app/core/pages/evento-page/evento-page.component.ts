import { Component, OnInit } from '@angular/core';
import { EventConectService } from '../../services/event-conect.service';
import { Event } from '../../interfaces/events.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento-page',
  templateUrl: './evento-page.component.html',
  styleUrls: ['./evento-page.component.scss'],
})
export class EventoPageComponent implements OnInit {
  public eventoId: string | null = null;
  public eventoSeleccionado: Event | null = null;
  constructor(
    private EventConectService: EventConectService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.eventoId = id;
        this.obtenerEvento(this.eventoId);
      }
    });
  }
  public obtenerEvento = (id: string) => {
    this.EventConectService.obtenerEvento(id).subscribe((evento) => {
      this.eventoSeleccionado = evento;
      this.EventConectService.obtenerImg(evento.imagenPrincipal).subscribe(
        (imagen) => {
          if (this.eventoSeleccionado && imagen.url) {
            this.eventoSeleccionado.imagenUrl = imagen.url;
          } else {
            console.error('La imagen no tiene URL');
          }
        },
        (error) => {
          console.error('Hubo un error al obtener la imagen', error);
        }
      );
    });
  };
}
