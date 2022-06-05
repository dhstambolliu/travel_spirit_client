import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home',
        // items: [{
        //   label: 'New',
        //   icon: 'pi pi-fw pi-plus',
        //   items: [
        //     {label: 'Project'},
        //     {label: 'Other'},
        //   ]
        // },
        //   {label: 'Open'},
        //   {label: 'Quit'}
        // ]
      },
      {
        label: 'Destinations',
        icon: 'pi pi-fw pi-car',
        routerLink: 'destinations'
        // items: [
        //   {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        //   {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        // ]
      },
      {
        label: 'About Us',
        icon: 'pi pi-fw pi-question-circle',
        routerLink: 'about_us'
      }
    ]
  }

  ngOnInit(): void {

  }

}
