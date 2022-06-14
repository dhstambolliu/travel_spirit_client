import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewsletterComponent} from "./components/newsletter/newsletter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel_spirit_client';

  constructor(public dialog: MatDialog) {
    setTimeout(() => {
      if (!window.sessionStorage.getItem('newsletter')) {
        this.dialog.open(NewsletterComponent, {
          width: '600px',
          data: ''
        });
      }
    }, 10000);
  }
}
