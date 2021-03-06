import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormField} from '../form-field';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent implements OnInit {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get isValid(): boolean { return this.form.controls[this.input.key].valid; }

}
