import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullblogComponent } from './fullblog.component';

describe('FullblogComponent', () => {
  let component: FullblogComponent;
  let fixture: ComponentFixture<FullblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
