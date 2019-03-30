import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Libs Component */
import { MatExpansionModule } from '@angular/material/expansion';
/* Component */
import { FaqComponent } from './components/faq.component';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    /* Angular Modules */
    CommonModule,
    /* Libs Modules */
    MatExpansionModule,
  ],
  exports: [ FaqComponent ],
})

export class FaqModule { }
