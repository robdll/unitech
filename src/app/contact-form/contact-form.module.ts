import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <== add the imports!

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ContactFormComponent } from './components/contact-form.component';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    /* Angular Modules */
    CommonModule,
    FormsModule,
    /* Libs Modules */
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule { }
