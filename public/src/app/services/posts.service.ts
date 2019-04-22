import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPostList() {
    return this.http.get(`/api/posts`);
  }

  getPostDetail(id) {
    return this.http.get(`/api/posts/${id}`);
  }
}
