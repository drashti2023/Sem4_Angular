import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDArrObjComponent } from './crud-arr-obj.component';

describe('CRUDArrObjComponent', () => {
  let component: CRUDArrObjComponent;
  let fixture: ComponentFixture<CRUDArrObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRUDArrObjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDArrObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
