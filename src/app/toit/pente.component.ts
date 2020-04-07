import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { slideInOutAnimation } from '../animations/index';



@Component({
    selector: 'app-pente',
    templateUrl: './pente.component.html',
    styleUrls: ['./pente.component.css'],
    animations: [slideInOutAnimation],
    host: { '[@slideInOutAnimation]': '' }
  })
  export class PenteComponent implements OnInit {

    submitted= false;
    message: string;
    message2: string;
  
    constructor() { }
  
    ngOnInit(): void {
    }

    onSubmit(infoTech: NgForm) {
      console.log(infoTech);
      this.submitted= true;
      this.message="Ce champs est obligatoire";
      this.message2="Merci de faire un choix";
    }
  
  }