import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactFormModule } from './contact-form/contact-form.module';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    /* Angular Module */
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    /* Lib Module */
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    /* App Module */
    ContactFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
