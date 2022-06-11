import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/models";
import {AddNewPackagesService} from "../../components/services/add-new-packages.service";
import {ContactService} from "../../components/services/contact.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  model: Contact = new Contact();

  constructor(public contactService: ContactService) {
  }

  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  registerForm(): void {


  }
}
