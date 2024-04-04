import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, CarouselModule],
})
export class PrimeNgModule {}
