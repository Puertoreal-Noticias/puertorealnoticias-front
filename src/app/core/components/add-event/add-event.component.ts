import { Component, OnInit } from '@angular/core';
import { EventConectService } from '../../services/event-conect.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Event } from '../../interfaces/events.interface';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  FormGroup: FormGroup = new FormGroup({
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    contenido: new FormControl(''),
    fecha_acto: new FormControl(''),
  });
  imagenControl = new FormControl(null);

  constructor(private EventConectService: EventConectService) {}
  ngOnInit(): void {}
  public addEvent = () => {
    const event: Event = this.FormGroup.value;
    const imagen = this.imagenControl.value;
    this.EventConectService.addEvent(event).subscribe(
      (response) => {
        console.log(response);
        let eventId;

        if (typeof response === 'string') {
          eventId = response;
        } else if (response && response._id) {
          eventId = response._id;
        }
        // Ahora puedes hacer la segunda llamada a la API para subir la imagen
        if (imagen && eventId) {
          // Comprueba si hay un archivo de imagen
          this.EventConectService.addImgToEvent(eventId, imagen).subscribe(
            (response) => {
              console.log(response);
              // Aquí puedes manejar la respuesta del servidor
            }
          );
        }
        alert('Evento creado');
      },
      (error) => {
        console.log(error);
      }
    );
  };
  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imagenControl.setValue(file);
    }
  }
}
