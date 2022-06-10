import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DestinationsComponent} from "./pages/destinations/destinations.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {BookingComponent} from "./pages/booking/booking.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {AddNewPackagesComponent} from "./pages/add-new-packages/add-new-packages.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'contact_us', component: ContactUsComponent},
  {path: 'about_us', component: AboutUsComponent},
  {path: 'booking/:id', component: BookingComponent},
  {path: 'add_new_packages', component: AddNewPackagesComponent},
  {path: '**', redirectTo: '/404'},
  {path: '404', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
