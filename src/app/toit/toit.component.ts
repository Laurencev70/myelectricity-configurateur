import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toit',
  templateUrl: './toit.component.html',
  styleUrls: ['./toit.component.css']
})
export class ToitComponent implements OnInit {
  faArrowAltCircleDown = faArrowAltCircleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
