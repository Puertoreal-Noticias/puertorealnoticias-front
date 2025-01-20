import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NoticiaPageComponent } from './pages/noticia-page/noticia-page.component';
import { SeccionNoticiaComponent } from './pages/seccion-noticia/seccion-noticia.component';
import { TiempoPageComponent } from './pages/tiempo-page/tiempo-page.component';
import { LoginComponent } from './components/login/login.component';
import { GestorNoticiasComponent } from './pages/gestor-noticias/gestor-noticias.component';
import { AddNoticiaComponent } from './components/add-noticia/add-noticia.component';
import { EliminarNoticiaComponent } from './components/eliminar-noticia/eliminar-noticia.component';
import { ModificarNoticiaComponent } from './components/modificar-noticia/modificar-noticia.component';
import { ObtenerNoticiaComponent } from './components/obtener-noticia/obtener-noticia.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RecientesComponent } from './components/recientes/recientes.component';
import { EventosPuertorealComponent } from './pages/eventos-puertoreal/eventos-puertoreal.component';
import { EventoPageComponent } from './pages/evento-page/evento-page.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ObtenerEventComponent } from './components/obtener-event/obtener-event.component';
import { ModificarEventComponent } from './components/modificar-event/modificar-event.component';
import { AddImgsToNoticiaComponent } from './components/add-imgs-to-noticia/add-imgs-to-noticia.component';
import { AddAdComponent } from './components/add-ad/add-ad.component';
import { AdsComponent } from './components/ads/ads.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'noticia-detallada/:id',
    component: NoticiaPageComponent,
  },
  {
    path: 'tipo-noticia/:categoria',
    component: SeccionNoticiaComponent,
  },
  {
    path: 'eventos-puerto-real',
    component: EventosPuertorealComponent,
  },
  {
    path: 'eventos-puerto-real/:id',
    component: EventoPageComponent,
  },
  {
    path: 'tiempo',
    component: TiempoPageComponent,
  },
  {
    path: 'noticia/crear-noticias/admin/login',
    component: LoginComponent,
    children: [
      {
        path: 'gestor',
        component: GestorNoticiasComponent,
        children: [
          {
            path: '',
            component: AddNoticiaComponent,
          },
          {
            path: 'añadir',
            component: AddNoticiaComponent,
          },
          {
            path: 'añadir-evento',
            component: AddEventComponent,
          },
          {
            path: 'obtener-evento',
            component: ObtenerEventComponent,
          },
          {
            path: 'modificar/:id',
            component: ModificarNoticiaComponent,
          },
          {
            path: 'añadir-imgs-noticia/:id',
            component: AddImgsToNoticiaComponent,
          },
          {
            path: 'modificar-evento/:id',
            component: ModificarEventComponent,
          },
          {
            path: 'obtener',
            component: ObtenerNoticiaComponent,
            children: [
              {
                path: '',
                component: CategoriaComponent,
              },
              {
                path: 'categoria',
                component: CategoriaComponent,
              },
              {
                path: 'recientes',
                component: RecientesComponent,
              },
            ],
          },
          {
            path: 'añadir-anuncio',
            component: AddAdComponent,
          },
          {
            path: 'obtener-anuncio',
            component: AdsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
