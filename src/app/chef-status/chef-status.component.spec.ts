import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefStatusComponent } from './chef-status.component';

describe('ChefStatusComponent', () => {
  let component: ChefStatusComponent;
  let fixture: ComponentFixture<ChefStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
