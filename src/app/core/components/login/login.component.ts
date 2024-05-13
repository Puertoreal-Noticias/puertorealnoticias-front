import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      user: new FormControl<string | null>(null),
      password: new FormControl<string | null>(null),
    });
  }

  // CONTROLAR EL FORMULARIO Y SI NO ES VALIDO O NO COINCIDE CON EL ADMIN QUE NO ENTRE A ESA RUTA
  public submitForm = (event: Event) => {
    event.preventDefault();
    const formValues = this.formGroup.value;
    console.log(formValues);
    console.log('hola');
    this.router.navigateByUrl('noticia/gestor/admin/page/admitido');
  };
}