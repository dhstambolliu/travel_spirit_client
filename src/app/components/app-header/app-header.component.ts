import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Packages} from "../carousel/carousel.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  items: MenuItem[];
  packages: Packages[] | undefined;
  query?: string

  constructor(private _router: Router) {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home',
      },
      {
        label: 'Destinations',
        icon: 'pi pi-fw pi-car',
        routerLink: 'destinations'
      },
      {
        label: 'About Us',
        icon: 'pi pi-fw pi-question-circle',
        routerLink: 'about_us'
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-fw pi-id-card',
        routerLink: 'contact_us'
      }
    ]
  }

  ngOnInit() {
  }

  search() {
    this._router.navigate(['destinations', {query: this.query}]);
  }
}
