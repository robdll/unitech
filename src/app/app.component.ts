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
    title: `<strong>Sviluppatori del Futuro</strong>  -  Chi sono`,
    copy: `UniversitàTech è l'academy degli sviluppatori del futuro.<br>
    La nostra missione è forgiare esperienze e  conoscenza necessarie ad avviare la 
      <strong>TUA</strong> carriera nel mondo informatico.`
  };
  training: object = {
    title: `<strong>Sviluppatori del Futuro</strong>  -  Come si diventa`,
    copy: `UniversitàTech è l'academy degli sviluppatori del futuro.<br>
    La nostra missione è forgiare esperienze e  conoscenza necessarie ad avviare la 
      <strong>TUA</strong> carriera nel mondo informatico.`
  };
  academy: object = {
    title: `<strong>Universita' Tech</strong>  -  La Nostra Missione`,
    copy: `Università.Tech ha l'obiettivo di trasformare sviluppatori junior in veri professionisti informatici fornendo la formazione;
    effettuando analisi degli interessi; sopponendo test attitudinali; e valutando l'abilità tecnica.
    Utilizzando queste informazioni indirizziamo i nostri candidati al ramo tecnico più adatto a loro, 
    preoccupandoci anche dell'inizio della loro carriera.`
  };

  ngOnInit() {
    AOS.init();
  }

}
