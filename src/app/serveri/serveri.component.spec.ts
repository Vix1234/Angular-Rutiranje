import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeriComponent } from './serveri.component';

describe('ServeriComponent', () => {
  let component: ServeriComponent;
  let fixture: ComponentFixture<ServeriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
