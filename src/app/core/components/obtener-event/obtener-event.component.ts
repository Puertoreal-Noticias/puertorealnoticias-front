import { Component, OnInit } from '@angular/core';
import { EventConectService } from '../../services/event-conect.service';
import { Event } from '../../interfaces/events.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obtener-event',
  templateUrl: './obtener-event.component.html',
  styleUrls: ['./obtener-event.component.scss'],
})
export class ObtenerEventComponent implements OnInit {
  public eventos: Event[] = [];
  constructor(
    private EventConectService: EventConectService,
    private navigate: Router
  ) {}
  ngOnInit(): void {
    this.obtenerEventos();
  }
  public obtenerEventos = () => {
    this.EventConectService.obtenerEventos().subscribe((eventos) => {
      this.eventos = eventos;
      this.eventos.forEach((evento) => {
        this.EventConectService.obtenerImg(evento.imagenPrincipal).subscribe(
          (img) => {
            evento.imagenUrl = img.url;
          }
        );
      });
    });
  };

  public modificarEvento = (eventoId: string) => {
    this.navigate.navigate([
      'noticia',
      'gestor',
      'admin',
      'page',
      'admitido',
      'modificar-evento',
      eventoId,
    ]);
  };
  public eliminarEvento = (eventoId: string) => {};
}
