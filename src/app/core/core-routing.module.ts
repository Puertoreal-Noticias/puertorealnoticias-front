import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NoticiaPageComponent } from './pages/noticia-page/noticia-page.component';
import { SeccionNoticiaComponent } from './pages/seccion-noticia/seccion-noticia.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
