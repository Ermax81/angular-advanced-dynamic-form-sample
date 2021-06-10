import {Component, Input, OnInit} from '@angular/core';
import {FormfieldControlService} from '../formfield-control.service';
import {FormGroup} from '@angular/forms';
import {FormField} from '../form-field';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() formFields: FormField<string>[] = [];
  form: FormGroup;
  payLoad = ' ';

  constructor(private formfieldService: FormfieldControlService) { }

  ngOnInit(): void {
    this.form = this.formfieldService.toFormGroup(this.formFields);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    console.log('payload:' + this.payLoad);
  }

}
