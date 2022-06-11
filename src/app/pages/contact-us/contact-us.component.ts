import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/models";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  model: Contact = new Contact();

  constructor() {
  }

  ngOnInit(): void {
  }

  registerForm(): void  {

    console.info(this.model)

  }
}
