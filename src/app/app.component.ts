import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'unipro';
  skillcategory: object = {
    title: `Sviluppatori del Futuro: `,
    subtitle: `Chi Sono`,
    copy: `Gli sviluppatori del futuro sono professionisti in grado di occuparsi di tutti gli aspetti di uno stack.
    Sono divisi in 3 categorie: Fullstack Designer, Fullstack Developer, ed Ethical Hacker.
    I Fullstack Designer si occupano di tutto ciò che riguarda il mondo visivo, dal prototipo al codice.
    I Fullstack Developer sono veri e propri Coder in grado di lavorare su qualsiasi tipo di languaggio programmazione.
    Gli Ethical Hacker possiedono tutte le conoscenze necessarie per integrare ed interagire con i sistemi informatici.`
  };
  training: object = {
    title: `Sviluppatori del Futuro: `,
    subtitle: `Come si Diventa`,
    copy: `Diventare sviluppatore del futuro richiede esperienza, conoscenza e costanza nell'apprendimento.
    Il settore informatico è vasto e nel mezzo di un processo evolutivo inarrestabile.
    E' necessario creare delle fondamenta solide, focalizzarsi in un ambito ben preciso, e non smettere di imparare.`
  };
  academy: object = {
    title: `Universita' Tech: `,
    subtitle: `La Nostra Missione`,
    copy: `Università.Tech ha l'obiettivo di trasformare semplici programmatori in veri professionisti informatici.
    I nostri pilastri portanti sono la formazione, l'indirizzamento, e l'integrazione lavorativa.`
  };

  ngOnInit() {
    AOS.init();
  }

}
