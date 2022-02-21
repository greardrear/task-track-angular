import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  

  constructor(private fb: FormBuilder) { }
  
  

  ngOnInit(): void {
   
  }


    myForm =  this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      phone: [null, [
        Validators.required,
        Validators.pattern('[- +()0-9]+'),
        Validators.maxLength(12)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        
      ]],
      nicknames: this.fb.array([
        this.fb.group({
          nickname: ('')
        } )
      ])
    });
    
      


   get nicknames () {
     return this.myForm.get('nicknames') as FormArray
   }

  get lastName () {
   return this.myForm.get('lastName')
  }
get firstName () {
  return this.myForm.get('firstName')
}

get email () {
  return this.myForm.get('email')
}

get phone () {
  return this.myForm.get('phone')
}

get password () {
  return this.myForm.get('password')
}



addNickname() {
  this.nicknames.push(this.fb.control(''))
}

submitForm(form: any) {
  console.log(form)
  
}
}
