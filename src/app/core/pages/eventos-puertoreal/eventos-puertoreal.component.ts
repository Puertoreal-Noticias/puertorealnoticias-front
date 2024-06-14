import { Component, OnInit } from '@angular/core';
import { Event } from '../../interfaces/events.interface';
import { EventConectService } from '../../services/event-conect.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eventos-puertoreal',
  templateUrl: './eventos-puertoreal.component.html',
  styleUrls: ['./eventos-puertoreal.component.scss'],
})
export class EventosPuertorealComponent implements OnInit {
  public eventos: Event[] = [];
  constructor(
    private EventConectService: EventConectService,
    private navigate: Router
  ) {}
  ngOnInit(): void {
    this.obtenerEventos();
  }
  public obtenerEventos(): void {
    this.EventConectService.obtenerEventos(2).subscribe((eventos) => {
      this.eventos = eventos;
      this.eventos.forEach((evento) => {
        this.EventConectService.obtenerImg(evento.imagenPrincipal).subscribe(
          (imagen) => {
            evento.imagenUrl = imagen.url;
          }
        );
      });
      console.log(eventos);
    });
  }
  public navgegateToEvento(id: string): void {
    console.log(id);
    this.navigate.navigate([`/eventos-puerto-real/${id}`]);
  }
}
