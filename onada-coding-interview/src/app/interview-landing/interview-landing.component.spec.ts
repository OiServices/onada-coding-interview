import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewLandingComponent } from './interview-landing.component';

describe('InterviewLandingComponent', () => {
  let component: InterviewLandingComponent;
  let fixture: ComponentFixture<InterviewLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
