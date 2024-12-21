import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagzineReadComponent } from './magzine-read.component';

describe('MagzineReadComponent', () => {
  let component: MagzineReadComponent;
  let fixture: ComponentFixture<MagzineReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagzineReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagzineReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
