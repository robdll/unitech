import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormService } from '../service/contact-form-service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @ViewChild('form') public mytemplateForm: NgForm;
  sent: boolean;

  constructor(private contactForm: ContactFormService ) { }

  onSubmit(form: NgForm) {
    const displaySuccess = (_) => {
      this.sent = true;
      setTimeout( () => { this.sent = false; }, 5000);
    };

    if (form.valid) {
      this.contactForm.sendRequest(form.value).subscribe( displaySuccess );
    }

  }

}
