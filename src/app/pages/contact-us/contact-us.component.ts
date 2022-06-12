import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/models";
import {ContactService} from "../../components/services/contact.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  model: Contact = new Contact();
  loader: boolean = false;

  constructor(private _formBuilder: FormBuilder, public contactService: ContactService, private messageService: MessageService) {
  }

  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  public checkError = (controlName: string, errorName: string) => {
    // @ts-ignore
    return this.packageForm.controls[controlName].hasError(errorName);
  }

  registerForm(): void {
    this.contactService.addContact(this.model as Contact)
      .subscribe((response: any) => {
        if (response.success) {
          this.loader = true;
          this.messageService.add({severity:'success', summary:'Sending form was success', detail:"Message is sent successfully. You will be contacted very soon!"});
          this.clearContactForm();
        } else {
          this.messageService.add({severity:'warning', summary:'Contact form errors', detail: response.messages ? response.messages.join(", ") : "Unknown error"});
          this.loader = false;
        }
      }, error => {
        console.error(error);
        this.messageService.add({severity:'warning', summary:'Contact form errors', detail: error && error.message ? error.message : "Unknown error"});
        this.loader = false;
      });
  }

  public clearContactForm() {
    this.model = new Contact();
  }

}
