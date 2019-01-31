import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component'
import { DetailsComponent } from './details/details.component'
import { PostsComponent } from './posts/posts.component'
import { DusersComponent } from './dusers/dusers.component'
import { DuserComponent } from './duser/duser.component'


const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'dusers',
    component: DusersComponent
  },
  {
    path: 'dusers/:key',
    component: DuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
