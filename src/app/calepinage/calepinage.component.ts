import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calepinage',
  templateUrl: './calepinage.component.html',
  styleUrls: ['./calepinage.component.css']
})
export class CalepinageComponent implements OnInit {

  step: number = 1;
  min: number = 0;
  max: number = 20;
  ariaLabelLess= "Less 1";
  ariaLabelMore= "Plus 1";
  renderedValueLine: string;
  renderedValueCol: string;
  value: number = 0;

  position = 'vertical';


  constructor() { }

  ngOnInit(): void {
    this.renderedValueLine = this.value.toString();
    this.renderedValueCol = this.value.toString();
  }

  
  toggleMoreLine = () => {
    if (this.step + this.value <= this.max) {
      this.value = this.value + this.step;
      this.renderedValueLine = this.value.toString();
    }
  };

  toggleLessLine = () => {
    if (this.value - this.step >= this.min) {
      this.value = this.value - this.step;
      this.renderedValueLine = this.value.toString();
    }
  };

  toggleMoreCol = () => {
    if (this.step + this.value <= this.max) {
      this.value = this.value + this.step;
      this.renderedValueCol = this.value.toString();
    }
  };

  toggleLessCol = () => {
    if (this.value - this.step >= this.min) {
      this.value = this.value - this.step;
      this.renderedValueCol = this.value.toString();
    }
  };

  setPositionHor() {
    this.position = 'horizontal';
  }
  
  setPositionVer() {
    this.position = 'vertical';
  }

}

