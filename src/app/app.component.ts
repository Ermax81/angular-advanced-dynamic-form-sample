import { Component } from '@angular/core';
import {FormfieldControlService} from './formfield-control.service';
import {FormField} from './form-field';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-advanced-dynamic-form-sample';

  formFields: Observable<FormField<any>[]>;
  constructor(service: FormfieldControlService) {
    this.formFields = service.getFormFields();
  }

}
