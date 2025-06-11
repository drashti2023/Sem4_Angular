import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentercolumnComponent } from './centercolumn.component';

describe('CentercolumnComponent', () => {
  let component: CentercolumnComponent;
  let fixture: ComponentFixture<CentercolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentercolumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentercolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
