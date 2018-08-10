import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()

export class AuthService {

    isLoggedIn: boolean = false;

    constructor(private http: HttpModule){}

    signup(email, password){
        console.log(email, password);
        return 
    }

     signin(email: string, password: string){
     this.isLoggedIn = true;
     localStorage.setItem('isLoggedIn', 'loggedIn');
    }
}