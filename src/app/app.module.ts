import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitlecasePipe } from './titlecase.pipe';
import { ControlledInputComponent } from './controlled-input/controlled-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CreateTaskComponent,
    TitlecasePipe,
    ControlledInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
