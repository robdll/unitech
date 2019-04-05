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
    answer: `E' un accademia di formazione per sviluppatori.`
  },
  {
    question: 'Come avviene la formazione?',
    answer: 'Sia onLine che onSite tramite corsi mirati.'
  },
  {
    question: 'Come viene supportata la scelta?',
    answer: `I candidati vengono indirizzati sulla base dei risultati ottenuti nei test degli interessi e delle abilità`.
  },
  {
    question: `Come funzion l'introduzione al mondo del lavoro?`,
    answer: 'Universita.tech assume direttamente tutti i candidati assegnandoli a progetti pensati su misura'
  },
  {
    question: 'UniverisitàTech è aperta a tutti?',
    answer: 'Tutti possono iscriversi, tuttavia viene effettuata una selezione dovuto il limitato numero di posti.'
  },
  {
    question: 'Corso e metodi di pagamento?',
    answer: 'E\' possibile pagare via carta di credito, bonifico, criptovalute, o contanti.'
  }];

}

interface Faq {
  question: string;
  answer: string;
}
