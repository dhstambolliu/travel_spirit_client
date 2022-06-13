import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {MenubarModule} from 'primeng/menubar';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import {SafeHtml} from "./pipes/SafeHtml";
import {CardModule} from "primeng/card";
import {PromotionListComponent} from './components/promotion-list/promotion-list.component';
import {DestinationsComponent} from './pages/destinations/destinations.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BookingComponent} from './pages/booking/booking.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {InputTextModule} from 'primeng/inputtext';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {AddNewPackagesComponent} from './pages/add-new-packages/add-new-packages.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {MatRadioModule} from "@angular/material/radio";
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ScrollTopModule} from 'primeng/scrolltop';
import {ScrollPanelModule} from "primeng/scrollpanel";

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
    ContactUsComponent,
    AddNewPackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    InputTextModule,
    FormsModule,
    MatCardModule,
    RouterModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    MatRadioModule,
    ToastModule,
    ProgressSpinnerModule,
    ScrollTopModule,
    ScrollPanelModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
