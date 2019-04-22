import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './posts.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: ':id',
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
