import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DestinationsComponent} from "./pages/destinations/destinations.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {BookingComponent} from "./pages/booking/booking.component";
import {SearchComponent} from "./pages/search/search.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent},
  { path: 'about_us', component: AboutUsComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'search', component: SearchComponent},
  {path: '**', redirectTo: '/404'},
  {path: '404', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
