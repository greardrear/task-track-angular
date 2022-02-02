import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-controlled-input',
  templateUrl: './controlled-input.component.html',
  styleUrls: ['./controlled-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, 
    useExisting: forwardRef(() => ControlledInputComponent),
    multi: true
  }]
})
export class ControlledInputComponent implements OnInit, ControlValueAccessor {

  value:string;
onChange: (value: string) => void;
onTouched: () => void;


  constructor() { }

  writeValue(value: string): void {
    this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {
   this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
   this.onTouched = fn;
  }

  ngOnInit(): void {
  }

}
