import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylisttracksComponent } from './playlisttracks.component';

describe('PlaylisttracksComponent', () => {
  let component: PlaylisttracksComponent;
  let fixture: ComponentFixture<PlaylisttracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylisttracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylisttracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
