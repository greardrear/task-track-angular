import { Injectable } from '@angular/core';
import { Task } from './Task'
@Injectable({
  providedIn: 'root'
})
export class PostService {
public posts: any[] = [
  {
    id: 1,
  title: 'Go to store',
  details: 'Buy stuff for lunch',
isFinished: false
},
{
id: 2,
title: 'Cook pasta for lunch',
details: 'Use the engredients bought',
isFinished: false
},
{
id: 3,
title: 'Go to dentist',
details:'Fix the broken tooth',
isFinished: true
},
];


 
  constructor() { 
  }

  removeTask(id: Number) {

    const index = this.posts.findIndex(p => p.id == id);
    this.posts.splice(index, 1);
   }

   completeTask(id: number) {
    console.log(id)
     this.posts.map((el) => {
       el.id
      if(id == el.id){
        el.isFinished = !el.isFinished
      }
      })
  
    }
    submitTask(form: Task) {
      
      form.isFinished = false;
      form.id = this.posts.length + 1;
      console.log(form)
      this.posts.push(form)
      console.log(this.posts)
    }

}
