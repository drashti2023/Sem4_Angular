import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDArrayComponent } from './crud-array.component';

describe('CRUDArrayComponent', () => {
  let component: CRUDArrayComponent;
  let fixture: ComponentFixture<CRUDArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRUDArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
