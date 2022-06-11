import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";
import {Packages} from "../../models/models";

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
        routerLink: 'about-us'
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-fw pi-id-card',
        routerLink: 'contact-us'
      }
    ]
  }

  ngOnInit() {
  }

  search() {
    this._router.navigate(['destinations', {query: this.query}]);
  }
}
