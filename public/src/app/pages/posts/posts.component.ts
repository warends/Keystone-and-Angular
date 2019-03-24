import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public API_URL = '/api';
  public posts: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`${this.API_URL}/posts`)
      .pipe(take(1))
      .subscribe((data: any) => {
        console.log(data);
        this.posts = data.posts;
      });

  }

}
