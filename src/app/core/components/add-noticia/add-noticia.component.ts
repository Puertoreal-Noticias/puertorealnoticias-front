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
  formGroup: FormGroup = new FormGroup({
    titulo: new FormControl(''),
    subtitulo: new FormControl(''),
    contenido: new FormControl(''),
    autor: new FormControl(''),
    categoria: new FormControl(''),
    destacado: new FormControl(''),
  });
  imagenControl = new FormControl(null);

  constructor(private apiConectService: ApiConectService) {}

  ngOnInit(): void {}

  // Resto de tu código
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
  public destacado = [
    { id: 0, nombre: 'no' },
    { id: 1, nombre: 'si' },
  ];
  // addNoticia(): void {
  //   const noticia: AddNews = this.formGroup.value;
  //   const imagen = this.imagenControl.value; // Obtén el archivo de imagen del FormControl del archivo de imagen
  //   this.apiConectService.agregarNoticia(noticia).subscribe(
  //     (response) => {
  //       // Tu código aquí
  //       console.log(response);
  //       // Aquí puedes manejar la respuesta del servidor
  //       // Suponiendo que la respuesta contiene el id de la noticia creada
  //       const noticiaId = response._id;
  //       // Ahora puedes hacer la segunda llamada a la API para subir la imagen
  //       if (imagen) {
  //         // Comprueba si hay un archivo de imagen
  //         this.apiConectService
  //           .addImgToNoticia(noticiaId, imagen)
  //           .subscribe((response) => {
  //             console.log(response);
  //             // Aquí puedes manejar la respuesta del servidor
  //           });
  //       }
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }
  addNoticia(): void {
    const noticia: AddNews = this.formGroup.value;
    const imagen = this.imagenControl.value; // Obtén el archivo de imagen del FormControl del archivo de imagen
    this.apiConectService.agregarNoticia(noticia).subscribe(
      (response) => {
        // Tu código aquí
        console.log(response);
        // Aquí puedes manejar la respuesta del servidor
        // Suponiendo que la respuesta contiene el id de la noticia creada
        let noticiaId;
        if (typeof response === 'string') {
          noticiaId = response;
        } else if (response && response._id) {
          noticiaId = response._id;
        }
        // Ahora puedes hacer la segunda llamada a la API para subir la imagen
        if (imagen && noticiaId) {
          // Comprueba si hay un archivo de imagen
          this.apiConectService
            .addImgToNoticia(noticiaId, imagen)
            .subscribe((response) => {
              console.log(response);
              // Aquí puedes manejar la respuesta del servidor
            });
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imagenControl.setValue(file);
    }
  }
}
