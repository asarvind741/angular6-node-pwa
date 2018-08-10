import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from 'src/app/posts/posts.component';
import { PostRoutingModule } from 'src/app/posts/posts-routing.module';
import { DummyService } from 'src/app/services/dummy.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule ({
    declarations: [
        PostsComponent,
    ],
    imports: [
        PostRoutingModule,
        SharedModule,
        CommonModule
    ],
    exports: [],
    providers: [DummyService
    ]
})

export class PostModule {}