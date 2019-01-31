import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DusersComponent } from './dusers.component';

describe('DusersComponent', () => {
  let component: DusersComponent;
  let fixture: ComponentFixture<DusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
