import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable()

export class AuthService1 {

    constructor( private httpClient: HttpClient ){ }

    signup(firstName, lastName, email, password){
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        const headers = new HttpHeaders();
        headers.append('Content-type', 'application/json');

        return this.httpClient.post(`${environment.apiUrl}/api/user/signup`, data, 
        {observe: 'body', headers: headers});
    }

}