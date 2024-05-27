import { Component, OnInit } from '@angular/core';
import { EventConectService } from '../../services/event-conect.service';
import { Event } from '../../interfaces/events.interface';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

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
  public eliminarEvento = (eventoId: string) => {
    this.EventConectService.eliminarEvento(eventoId)
      .pipe(
        catchError((error) => {
          console.error('Error al eliminar el evento:', error);
          return of(); // Devuelve un observable vacío para que la cadena de observables pueda continuar
        })
      )
      .subscribe((response) => {
        console.log(response); // Aquí se imprimirá "Evento eliminado"
        this.obtenerEventos();
      });
  };
}
