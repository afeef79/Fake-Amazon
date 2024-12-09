import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottompageComponent } from './bottompage.component';

describe('BottompageComponent', () => {
  let component: BottompageComponent;
  let fixture: ComponentFixture<BottompageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottompageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottompageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
