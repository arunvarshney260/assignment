import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfordirectivesComponent } from './ngfordirectives.component';

describe('NgfordirectivesComponent', () => {
  let component: NgfordirectivesComponent;
  let fixture: ComponentFixture<NgfordirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgfordirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfordirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
