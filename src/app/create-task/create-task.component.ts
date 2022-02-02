import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Task } from '../Task'; 
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  taskGroup = new FormGroup ({
    title: new FormControl( '',[
      Validators.required,
      Validators.minLength(5)
    ]),
    details: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    mine: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private tasks: PostService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }



submitTask(form: Task) {
  console.log(form)
this.tasks.submitTask(form)
this.taskGroup.reset()

}
}
