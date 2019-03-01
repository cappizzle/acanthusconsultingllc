import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router"; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MastheadComponent } from "./components/masthead/masthead.component"
import { TestimonyComponent } from "./components/testimonials/testimonials.component"
import { CallToActionComponent } from "./components/call-to-action/call-to-action.component"
import { IconComponent } from "./components/icons/icons.component"
import { ShowcaseComponent } from "./components/showcase/showcase.component"
import { FooterComponent } from "./components/footer/footer.component"
import { NavbarComponent } from "./components/navbar/navbar.component"

import { SeoService } from "./services/seo.service"

@NgModule({
  declarations: [
    MastheadComponent,
    CallToActionComponent,
    TestimonyComponent,
    IconComponent,
    ShowcaseComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot().ngModule,
    RouterModule,
    MastheadComponent,
    CallToActionComponent,
    TestimonyComponent,
    IconComponent,
    ShowcaseComponent,
    FooterComponent,
    NavbarComponent
  ],
  providers: [
    SeoService
  ],
})
export class SharedModule {}