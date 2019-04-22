import { PostsService } from './../../../services/posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, mergeMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  private unsubscribeAll: Subject<void> = new Subject<void>();
  public post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        filter(params => params.id),
        mergeMap(params => this.postService.getPostDetail(params.id)),
        takeUntil(this.unsubscribeAll)
      )
      .subscribe((data: any) => {
        console.log(data);
        this.post = data.post;
      });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
