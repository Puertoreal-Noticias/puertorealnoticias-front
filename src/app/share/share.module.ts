import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [LayoutPageComponent, NavBarComponent, FooterComponent],
  imports: [CommonModule, ShareRoutingModule, PrimeNgModule],
})
export class ShareModule {}
