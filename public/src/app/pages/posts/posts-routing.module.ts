import { PostsComponent } from './posts.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    // children: [
    //   {
    //     path: '',
    //     component: NoFilterComponent
    //   },
    //   {
    //     path: 'results',
    //     component: CapacityResultsComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
