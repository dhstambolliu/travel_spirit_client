import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import {MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import {SafeHtml} from "./pipes/SafeHtml";
import {CardModule} from "primeng/card";
import { PromotionListComponent } from './components/promotion-list/promotion-list.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from './pages/booking/booking.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    SafeHtml,
    PromotionListComponent,
    DestinationsComponent,
    NotFoundComponent,
    AboutUsComponent,
    BookingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
