import { Component, OnInit } from '@angular/core';
import { ApiConectService } from '../../services/api-conect.service';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../interfaces/news.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-imgs-to-noticia',
  templateUrl: './add-imgs-to-noticia.component.html',
  styleUrls: ['./add-imgs-to-noticia.component.scss'],
})
export class AddImgsToNoticiaComponent implements OnInit {
  public noticiaSeleccionada: News | null = null;

  constructor(
    private ApiConectService: ApiConectService,
    private route: ActivatedRoute
  ) {}
  imagenControl = new FormControl(null);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.obtenerNoticia(id);
      }
    });
  }

  // public obtenerNoticia(id: string) {
  //   this.ApiConectService.obtenerNoticiaId(id).subscribe((noticia) => {
  //     this.noticiaSeleccionada = noticia;
  //     if (this.noticiaSeleccionada) {
  //       this.ApiConectService.calcularUrl(this.noticiaSeleccionada);
  //     }
  //     if (this.noticiaSeleccionada?.imagenesUrl!.length > 0) {
  //       this.ApiConectService.calcularUrlImgRelacionada(
  //         this.noticiaSeleccionada
  //       );
  //     }
  //     console.log('Noticia seleccionada: ', this.noticiaSeleccionada);
  //   });
  // }
  public obtenerNoticia(id: string) {
    this.ApiConectService.obtenerNoticiaId(id).subscribe((noticia) => {
      this.noticiaSeleccionada = noticia;
      if (this.noticiaSeleccionada) {
        this.ApiConectService.calcularUrl(this.noticiaSeleccionada);
        if (this.noticiaSeleccionada.imagenes.length > 0) {
          this.ApiConectService.calcularUrlImgRelacionada(
            this.noticiaSeleccionada
          );
        }
      }
      console.log('Noticia seleccionada: ', this.noticiaSeleccionada);
    });
  }
  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imagenControl.setValue(file);
    }
  }
  public cambiarImg = (id: string) => {
    const img = this.imagenControl.value;
    console.log(id, img);
    if (img === null) {
      return;
    }
    this.ApiConectService.addImgRelacionadaToNoticia(id, img).subscribe(
      (res) => {
        console.log(res);
        this.obtenerNoticia(id);
      }
    );

    // api conect con imagen relacionada para la noticia seleccionada
  };
  public eliminarImg = (idNoticia: string, idImg: string) => {
    console.log(idNoticia, idImg);
    this.ApiConectService.eliminarImgRelacionada(idNoticia, idImg).subscribe(
      (response) => {
        console.log(response);
        this.obtenerNoticia(idNoticia);
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, actualizando la lista de imágenes
      },
      (error) => {
        console.error(error);
        // Aquí puedes manejar los errores, por ejemplo, mostrando un mensaje al usuario
      }
    );
  };
}
