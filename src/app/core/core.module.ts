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
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';

import { NavegadorGestorComponent } from './components/navegador-gestor/navegador-gestor.component';
import { AddNoticiaComponent } from './components/add-noticia/add-noticia.component';
import { GestorNoticiasComponent } from './pages/gestor-noticias/gestor-noticias.component';
import { ModificarNoticiaComponent } from './components/modificar-noticia/modificar-noticia.component';
import { EliminarNoticiaComponent } from './components/eliminar-noticia/eliminar-noticia.component';
import { ObtenerNoticiaComponent } from './components/obtener-noticia/obtener-noticia.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RecientesComponent } from './components/recientes/recientes.component';
import { EventosPuertorealComponent } from './pages/eventos-puertoreal/eventos-puertoreal.component';
import { EventoPageComponent } from './pages/evento-page/evento-page.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ObtenerEventComponent } from './components/obtener-event/obtener-event.component';
import { ModificarEventComponent } from './components/modificar-event/modificar-event.component';
import { AddImgsToNoticiaComponent } from './components/add-imgs-to-noticia/add-imgs-to-noticia.component';
import { AnunciosAmazonComponent } from './components/anuncios-amazon/anuncios-amazon.component';

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
    LoginComponent,
    NavegadorGestorComponent,
    AddNoticiaComponent,
    GestorNoticiasComponent,
    ModificarNoticiaComponent,
    EliminarNoticiaComponent,
    ObtenerNoticiaComponent,
    CategoriaComponent,
    RecientesComponent,
    EventosPuertorealComponent,
    EventoPageComponent,
    AddEventComponent,
    ObtenerEventComponent,
    ModificarEventComponent,
    AddImgsToNoticiaComponent,
    AnunciosAmazonComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {}
