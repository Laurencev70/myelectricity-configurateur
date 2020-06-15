import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted= false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.router.navigate(['../dashboard']);
    }

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  
}
