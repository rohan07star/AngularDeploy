import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, SitebarComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,SitebarComponent,FooterComponent]
})
export class SiteFrameworkModule { }
