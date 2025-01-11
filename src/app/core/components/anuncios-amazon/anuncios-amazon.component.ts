import { Component, Input } from '@angular/core';
import { Ad } from '../../interfaces/ad.interface';

@Component({
  selector: 'app-anuncios-amazon',
  templateUrl: './anuncios-amazon.component.html',
  styleUrls: ['./anuncios-amazon.component.scss'],
})
export class AnunciosAmazonComponent {
  @Input() anuncios: Ad[] = [];
}
