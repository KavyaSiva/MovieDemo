import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMovComponent } from './fav-mov.component';

describe('FavMovComponent', () => {
  let component: FavMovComponent;
  let fixture: ComponentFixture<FavMovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavMovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
