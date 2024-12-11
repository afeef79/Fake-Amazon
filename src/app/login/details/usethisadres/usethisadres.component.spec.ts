import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsethisadresComponent } from './usethisadres.component';

describe('UsethisadresComponent', () => {
  let component: UsethisadresComponent;
  let fixture: ComponentFixture<UsethisadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsethisadresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsethisadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
