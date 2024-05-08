import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LocalComponent } from './components/local/local.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { CulturaComponent } from './components/cultura/cultura.component';
import { DeportesComponent } from './components/deportes/deportes.component';
import { MedioAmbienteComponent } from './components/medio-ambiente/medio-ambiente.component';
import { UltimasNoticiasComponent } from './components/ultimas-noticias/ultimas-noticias.component';
import { NoticiaPageComponent } from './pages/noticia-page/noticia-page.component';
import { SeccionNoticiaComponent } from './pages/seccion-noticia/seccion-noticia.component';
import { TiempoPageComponent } from './pages/tiempo-page/tiempo-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LocalComponent,
    PoliticaComponent,
    CulturaComponent,
    DeportesComponent,
    MedioAmbienteComponent,
    UltimasNoticiasComponent,
    NoticiaPageComponent,
    SeccionNoticiaComponent,
    TiempoPageComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, PrimeNgModule],
})
export class CoreModule {}
