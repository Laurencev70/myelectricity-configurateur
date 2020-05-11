import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animations/index';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pente',
  templateUrl: './pente.component.html',
  styleUrls: ['./pente.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class PenteComponent implements OnInit {
  faTimes = faTimes

  infoTech: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.infoTech = this.fb.group({
      dimensionLong: ['', Validators.required],
      dimensionLarg: ['', Validators.required],
      orientation: ['', Validators.required],
      materiaux: ['', Validators.required],
      etage: ['', Validators.required],
      cablePanCof: [''],
      cableCofTab: [''],
      abonnement: ['', Validators.required],
      stockage: ['', Validators.required]
    })
  }

  get f() { return this.infoTech.controls; }

  onSubmit() {
    console.log(this.infoTech);
    this.submitted = true;
    if (this.infoTech.invalid) {
      return;
    } else {
      this.router.navigate(['../calepinage']);
    }

  }

  onReset() {
    this.submitted = false;
    this.infoTech.reset();
  }

}