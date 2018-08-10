import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DummyService } from 'src/app/services/dummy.service';
import { HttpEventType, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs/internal/observable/from';



@Component({
    selector: 'app-post',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
    posts: any;
    constructor(private httpClient: HttpClient,
        private dummyService: DummyService,
        private toastrService: ToastrService) {

    }
    ngOnInit() {
        this.getPosts();
        this.getPost();
    }

    // Check event type
    // getPosts(){
    //     this.data = this.dummyService.getPosts()
    //     .subscribe((data: HttpEvent<any>) => {
    //         console.log(HttpEventType.Sent === data.type)
    //     })
    // }

    getPosts() {
        this.dummyService.getPosts()
            .subscribe((data) => {
                this.posts = data;
            },
            (err: HttpErrorResponse) => {
                console.log("Error occured: ", err);
            })
    }

    getPost(){
        this.dummyService.getPost()
        .subscribe(data => {
            console.log(data)
        })
    }

    addPost() {
        this.dummyService.addPost()
            .subscribe((response: HttpResponse<any>) => {
                if (response.status == 201) {
                    this.toastrService.success('Created Post successfully..', 'Success',
                        { timeOut: 3000, positionClass: 'toast-top-center', closeButton: true, toastClass: 'toast' })
                }
            })
    }
}