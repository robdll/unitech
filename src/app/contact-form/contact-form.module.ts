import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <== add the imports!
import { HttpClientModule } from '@angular/common/http'; 

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ContactFormComponent } from './components/contact-form.component';
import { ContactFormService } from './service/contact-form-service';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    /* Angular Modules */
    CommonModule,
    FormsModule,
    HttpClientModule,

    /* Libs Modules */
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ContactFormComponent
  ],
  providers: [
    ContactFormService
  ]
})
export class ContactFormModule { }
