import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()

export class DummyService {

    constructor(private httpClient: HttpClient) { }

    getPosts() {
        // response returned along with body
        //     return this.httpClient.get('https://jsonplaceholder.typicode.com/posts',
        //    { observe: 'response'})

        //  Default,  only body will be sent and default format will be json
        //    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')

        // You can request for body using observe object
        // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts', { observe: 'body'})

        // You can request for another formattype of data like below we are requesting for text type response
        // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts',
        //     { observe: 'body', responseType: 'text' })

        // You can request for event type response
        // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts', 
        // { observe: 'events' })

        // You can add header like

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts',
            { observe: 'body', headers: headers })

    }

    addPost() {
        return this.httpClient.post('http://jsonplaceholder.typicode.com/posts',
            { title: 'foo', body: 'bar', userId: 1 },
            { observe: 'response', headers: new HttpHeaders({ 'Content-type': 'application/json' }) 
        })
    }

    getPost(){
        return this.httpClient.get('http://jsonplaceholder.typicode.com/posts/1')
    }
}