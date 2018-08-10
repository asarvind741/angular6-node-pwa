import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  @ViewChild('signupForm') form1: NgForm

  constructor() { }

  ngOnInit() {
  }

  onSignup(){
    const email = this.form1.value.email;
    const password = this.form1.value.password;
  }

}
