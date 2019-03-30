import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent {

  constructor() { }

  faqs: Faq[] = [{
    question: `Cos'e' univeristatech?`,
    answer: 'This is the primary content of the panel.'
  },
  {
    question: 'Come avviene la formazione?',
    answer: 'This is the primary content of the panel.'
  },
  {
    question: 'Come viene supportata la scelta?',
    answer: 'This is the primary content of the panel.'
  },
  {
    question: `Come funzion l'introduzione al mondo del lavoro?`,
    answer: 'This is the primary content of the panel.'
  },
  {
    question: 'UniverisitàTech è aperta a tutti?',
    answer: 'This is the primary content of the panel.'
  },
  {
    question: 'Corso e metodi di pagamento?',
    answer: 'This is the primary content of the panel.'
  }];

}

interface Faq {
  question: string;
  answer: string;
}