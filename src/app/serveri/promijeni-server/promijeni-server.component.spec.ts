import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromijeniServerComponent } from './promijeni-server.component';

describe('PromijeniServerComponent', () => {
  let component: PromijeniServerComponent;
  let fixture: ComponentFixture<PromijeniServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromijeniServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromijeniServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
