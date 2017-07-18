import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewGridItemComponent } from './profile-view-grid-item.component';

describe('ProfileViewGridItemComponent', () => {
  let component: ProfileViewGridItemComponent;
  let fixture: ComponentFixture<ProfileViewGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileViewGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileViewGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
