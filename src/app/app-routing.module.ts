import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { GetpostComponent } from './getpost/getpost.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'post/create',
    component : AddpostComponent
  },
  {
    path: 'post/edit/:id',
    component : EditpostComponent
  },
  {
    path: 'post',
    component : GetpostComponent
  },
  {
    path: 'post/view/:id',
    component : ViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
