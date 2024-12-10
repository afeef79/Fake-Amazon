import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentersectionComponent} from "../center-section/center-section.component";

describe('HomepagesComponent', () => {
  let component: CentersectionComponent;
  let fixture: ComponentFixture<CentersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentersectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
