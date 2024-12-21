import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagzineHomeComponent } from './magzine-home.component';

describe('MagzineHomeComponent', () => {
  let component: MagzineHomeComponent;
  let fixture: ComponentFixture<MagzineHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagzineHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagzineHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
