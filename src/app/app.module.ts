import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ActionCallComponent } from './components/footer/action-call/action-call.component';
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';
import { FeatureComponent } from './components/feature/feature.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { ServiceComponent } from './components/service/service.component';
import { GlobalComponent } from './components/global/global.component';
import { DewdropComponent } from './components/dewdrop/dewdrop.component';
import { BottlemockComponent } from './components/bottlemock/bottlemock.component';
import { TabledesignComponent } from './components/tabledesign/tabledesign.component';
import { MakeupelemComponent } from './components/makeupelem/makeupelem.component';
import { ShopbagComponent } from './components/shopbag/shopbag.component';
import { CaramelComponent } from './components/caramel/caramel.component';
import { TemplateCssComponent } from './components/template-css/template-css.component';
import { MobileMetasComponent } from './components/mobile-metas/mobile-metas.component';
import { BasicNeedsComponent } from './components/basic-needs/basic-needs.component';
import { HeadNecessitiesComponent } from './components/head-necessities/head-necessities.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CompanyDescriptionComponent } from './components/about-page/company-description/company-description.component';
import { TeamComponent } from './components/about-page/team/team.component';
import { CompanyFeatureComponent } from './components/about-page/company-feature/company-feature.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    ActionCallComponent,
    AboutComponent,
    WorksComponent,
    FeatureComponent,
    NotFoundComponent,
    AboutPageComponent,
    BlogComponent,
    ServiceComponent,
    GlobalComponent,
    DewdropComponent,
    BottlemockComponent,
    TabledesignComponent,
    MakeupelemComponent,
    ShopbagComponent,
    CaramelComponent,
    TemplateCssComponent,
    MobileMetasComponent,
    BasicNeedsComponent,
    HeadNecessitiesComponent,
    ContactComponent,
    ClientsComponent,
    CompanyDescriptionComponent,
    TeamComponent,
    CompanyFeatureComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
