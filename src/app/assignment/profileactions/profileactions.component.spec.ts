import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileactionsComponent } from './profileactions.component';

describe('ProfileactionsComponent', () => {
  let component: ProfileactionsComponent;
  let fixture: ComponentFixture<ProfileactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
