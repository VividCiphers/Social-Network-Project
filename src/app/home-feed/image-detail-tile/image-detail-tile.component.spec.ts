import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailTileComponent } from './image-detail-tile.component';

describe('ImageDetailTileComponent', () => {
  let component: ImageDetailTileComponent;
  let fixture: ComponentFixture<ImageDetailTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
