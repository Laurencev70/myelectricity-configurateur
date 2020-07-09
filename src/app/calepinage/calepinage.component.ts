import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calepinage',
  templateUrl: './calepinage.component.html',
  styleUrls: ['./calepinage.component.css']
})
export class CalepinageComponent implements OnInit {

  
  ariaLabelLess= "Less 1";
  ariaLabelMore= "Plus 1";
  

  panneaux = [{ position: '' }];
  position = ['vertical', 'horizontal'];
  
  

  nbLine: number = 0;
  nbColumn: number = 0;

  lines = [];
  columns = [];

  constructor() { }

  ngOnInit(): void {}

  
  setPositionHor() {
    this.position = ['horizontal'];
  }
  
  setPositionVer() {
    this.position = ['vertical'];
  }

  line(num) {
    console.log('line');
    this.nbLine = this.nbLine + num;
    this.renduTab('nbLine', this.nbLine);
  }

  column(num) {
    console.log('column');
    this.nbColumn = this.nbColumn + num;
    this.renduTab('nbColumn', this.nbColumn);
  }
  

  renduTab(name, num) {
    if(name === 'nbLine') {
      this.lines = [];
      for (let i = 0; i < num; i++){
        this.lines.push('line');
      }
    } else {
      this.columns = [];
      for (let i = 0; i < num; i++){
        this.columns.push('column');
      }
    }  
  };
}

