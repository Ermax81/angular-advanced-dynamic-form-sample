import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormInputComponent} from './dynamic-form-input/dynamic-form-input.component';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormInputComponent
      ],
      providers: [
        HttpClientModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-advanced-dynamic-form-sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-advanced-dynamic-form-sample');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-advanced-dynamic-form-sample app is running!');
  });
});
