import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ItemComponent } from './propiedades/item/item.component';
import { PropiedadService } from './propiedad.service';
import { SubcategoriaPipe } from './pipes/subcategoria.pipe';
import { PropiedadEditComponent } from './propiedades/propiedad-edit/propiedad-edit.component';
import { PropiedadDetailComponent } from './propiedades/propiedad-detail/propiedad-detail.component';
import { AuthModule } from './auth/auth.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PropiedadesComponent,
    CarouselComponent,
    ItemComponent,
    SubcategoriaPipe,
    PropiedadEditComponent,
    PropiedadDetailComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SlideshowModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [PropiedadService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
