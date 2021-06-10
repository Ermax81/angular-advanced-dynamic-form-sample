import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormInputComponent } from './dynamic-form-input.component';
import {DynamicFormComponent} from '../dynamic-form/dynamic-form.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('DynamicFormInputComponent', () => {
  let component: DynamicFormInputComponent;
  let fixture: ComponentFixture<DynamicFormInputComponent>;

  beforeEach(async () => {
    let [] = [

    ];
    await TestBed.configureTestingModule({
      declarations: [
        DynamicFormComponent,
        DynamicFormInputComponent
      ], providers: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
