import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledescriptionComponent } from './profiledescription.component';

describe('ProfiledescriptionComponent', () => {
  let component: ProfiledescriptionComponent;
  let fixture: ComponentFixture<ProfiledescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiledescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
