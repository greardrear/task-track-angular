import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  
  
  constructor(private post: PostService) { 
    
  }

posts = this.post.posts

  ngOnInit(): void {
  }


  completeTask(id: number) {
    this.post.completeTask(id)
  }


removeTask(id: number) {
  this.post.removeTask(id)
}


  



}

