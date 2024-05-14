import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ListboxModule } from 'primeng/listbox';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    CarouselModule,
    InputTextModule,
    PasswordModule,
    ListboxModule,
  ],
})
export class PrimeNgModule {}
