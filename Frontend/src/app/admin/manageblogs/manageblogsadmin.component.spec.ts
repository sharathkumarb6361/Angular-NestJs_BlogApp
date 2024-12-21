import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageblogsComponentAdmin } from './manageblogsadmin.component';

describe('ManageblogsComponent', () => {
  let component: ManageblogsComponentAdmin;
  let fixture: ComponentFixture<ManageblogsComponentAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageblogsComponentAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageblogsComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
