import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable()

export class AuthService {

    constructor( private httpClient: HttpClient ){ }

    signup(){
        const headers = new HttpHeaders();
        headers.append('Content-type', 'application/json');

        this.httpClient.post(`${environment.apiUrl}/api/user/signup`, 
        {})
    }

}