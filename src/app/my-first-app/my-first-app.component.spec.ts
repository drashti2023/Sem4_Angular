import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstAppComponent } from './my-first-app.component';

describe('MyFirstAppComponent', () => {
  let component: MyFirstAppComponent;
  let fixture: ComponentFixture<MyFirstAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
