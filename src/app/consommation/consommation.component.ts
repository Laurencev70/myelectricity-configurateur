import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consommation',
  templateUrl: './consommation.component.html',
  styleUrls: ['./consommation.component.css']
})
export class ConsommationComponent implements OnInit {

  consommations =[
    {
      isolationmoyenne: "20m2 - 1 personne",
      toutelectrique: 3800,
      pac: 500,
      gaz: 1900,
      poele: 1500,
    },
    {
      isolationmoyenne: "40m2 - 2 personnes",
      toutelectrique: 7000,
      pac: 1000,
      gaz: 3500,
      poele: 2000,
    },
    {
      isolationmoyenne: "60m2 - 3 personnes",
      toutelectrique: 8650,
      pac: 1500,
      gaz: 4325,
      poele: 2500,
    },
    {
      isolationmoyenne: "80m2 - 4 personnes",
      toutelectrique: 10200,
      pac: 2000,
      gaz: 5100,
      poele: 3000,
    },
    {
      isolationmoyenne: "120m2 - 5 personnes",
      toutelectrique: 15700,
      pac: 2500,
      gaz: 7850,
      poele: 3500,
    }
  ];

  
  

  checked = false;

 
  
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(consommation: NgForm) {
    console.log(consommation)
   
    
  }

  isChecked(){
    if (this.checked) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  }
  

 


}
