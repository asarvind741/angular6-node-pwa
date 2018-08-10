import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


// https://www.npmjs.com/package/ngx-toastr (toastr module)
// Include line import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  in  
// root module if you are using toastr otherwise it will throw error and make sure that angular/animations
// is installed

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  @ViewChild('signinForm') form1: NgForm

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignin() {
    console.log(this.form1.value)
    const email = this.form1.value.email;
    const password = this.form1.value.password;

    this.authService.signin(email, password);

    if (localStorage.getItem('isLoggedIn')) {
      this.toastrService.success('You are logged in...', 'Successful',
        { timeOut: 3000, positionClass: 'toast-top-center', closeButton: true, toastClass: 'toast' });

      this.router.navigate(['/'])
    }

  }

}
