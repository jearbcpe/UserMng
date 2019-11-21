import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComjComponent } from './new-comj.component';

describe('NewComjComponent', () => {
  let component: NewComjComponent;
  let fixture: ComponentFixture<NewComjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
