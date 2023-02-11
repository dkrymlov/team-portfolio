import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyRightBarComponent } from './empty-right-bar.component';

describe('EmptyRightBarComponent', () => {
  let component: EmptyRightBarComponent;
  let fixture: ComponentFixture<EmptyRightBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyRightBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyRightBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
