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
      name: new FormControl<string | null>(null),
      password: new FormControl<string | null>(null),
    });
  }

  public submitForm(event: Event): void {
    event.preventDefault();
    // Redirige directamente al gestor
    this.router.navigateByUrl('noticia/crear-noticias/admin/gestor');
  }
}
