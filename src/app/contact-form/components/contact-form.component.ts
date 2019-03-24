import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormService } from '../service/contact-form-service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  constructor(private contactForm: ContactFormService ) { }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.valid) {
      this.contactForm.sendRequest(form.value)
        .subscribe( data => {
          console.log(data);
        });
    }
  }

}
