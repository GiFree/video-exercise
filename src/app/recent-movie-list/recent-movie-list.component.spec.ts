import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMovieListComponent } from './recent-movie-list.component';

describe('RecentMovieListComponent', () => {
  let component: RecentMovieListComponent;
  let fixture: ComponentFixture<RecentMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
