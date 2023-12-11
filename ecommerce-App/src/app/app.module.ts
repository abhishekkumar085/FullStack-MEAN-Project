import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainCrouselComponent } from './home/main-crousel/main-crousel.component';
import { HomeProductCardComponent } from './home/home-product-card/home-product-card.component';

import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCrouselComponent,
    HomeProductCardComponent,
    ProductSliderComponent,
    ProductSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
