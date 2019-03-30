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
    title: `asd`,
    copy: `UniversitàTech è l'academy degli sviluppatori del futuro.<br>
    La nostra missione è forgiare esperienze e  conoscenza necessarie ad avviare la 
      <strong>TUA</strong> carriera nel mondo informatico.`
  };

  ngOnInit() {
    AOS.init();
  }

}
