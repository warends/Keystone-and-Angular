import { PostsService } from './../../services/posts.service';
import { PostsRoutingModule } from './posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [PostsComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
