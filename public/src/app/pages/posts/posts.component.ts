import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: any;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPostList()
      .pipe(take(1))
      .subscribe((data: any) => {
        console.log(data);
        this.posts = data.posts;
      });

  }

}
