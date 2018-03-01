import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTwoComponent } from './comp-two.component';

describe('CompTwoComponent', () => {
  let component: CompTwoComponent;
  let fixture: ComponentFixture<CompTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
