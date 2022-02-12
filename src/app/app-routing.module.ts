import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { PostsComponent } from './posts/posts.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path: 'create-task', component: CreateTaskComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: '**', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
