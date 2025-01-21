import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConectService } from '../../services/api-conect.service';
import { Ad } from '../../interfaces/ad.interface';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.scss'],
})
export class AddAdComponent {
  adForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiConectService) {
    this.adForm = this.fb.group({
      url: ['', [Validators.pattern('https?://.+')]], // URL ya no es requerida
      image: [null, Validators.required],
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.adForm.patchValue({
        image: file,
      });
    }
  }

  submitForm(): void {
    if (this.adForm.invalid) {
      return;
    }

    const formData = new FormData();
    if (this.adForm.get('url')?.value) {
      formData.append('url', this.adForm.get('url')?.value);
    }
    formData.append('image', this.adForm.get('image')?.value);

    this.apiService.crearAnuncio(formData).subscribe(
      (response: Ad) => {
        console.log('Anuncio creado:', response);
        // Aquí puedes añadir alguna acción adicional, como redirigir a otra página o mostrar un mensaje de éxito
      },
      (error) => {
        console.error('Error al crear el anuncio:', error);
      }
    );
  }
}
