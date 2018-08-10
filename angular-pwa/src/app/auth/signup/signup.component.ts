import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService1 } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  @ViewChild('signupForm') form1: NgForm

  constructor(private authService: AuthService1) { }

  ngOnInit() {
  }

  onSignup(){
    const firstName = this.form1.value.firstName;
    const lastName = this.form1.value.lastName;
    const email = this.form1.value.email;
    const password = this.form1.value.password;
    this.authService.signup(firstName, lastName, email, password)
    .subscribe((data) => {
      console.log("data", data)
    })
  }

}
