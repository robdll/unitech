import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import AOS from 'aos';






@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {

  nome:string;
  cognome:string;
  telefono:number;
  email:string;
  messaggio:string;

  payload:any;

  constructor() { }

  ngOnInit() {
    AOS.init();
  }
  
  submit(){

    this.payload = {
      name:this.nome,
      lastname:this.cognome,
      phone:this.telefono,
      messagge:this.messaggio,
      email:this.email      
    }
    console.log(this.payload)
    
  }

}
