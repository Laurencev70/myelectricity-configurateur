import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  Submitted= false;
  Message: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(userForm: NgForm) {
    console.log(userForm);
    this.Submitted= true;
    this.Message="Ce champs est obligatoire"
  }

  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
  }

}
