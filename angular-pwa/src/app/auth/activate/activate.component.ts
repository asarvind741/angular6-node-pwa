import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService1 } from '../../shared/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  token: any;

  constructor(private route: ActivatedRoute, 
              private authService: AuthService1) { 

  }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    this.authService.activateAccount(this.token)
    .subscribe((response: HttpResponse<any>) => {
      console.log(response)
    })

  }

}
