import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsUsingformbuilderComponent } from './reactive-forms-usingformbuilder.component';

describe('ReactiveFormsUsingformbuilderComponent', () => {
  let component: ReactiveFormsUsingformbuilderComponent;
  let fixture: ComponentFixture<ReactiveFormsUsingformbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsUsingformbuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsUsingformbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
