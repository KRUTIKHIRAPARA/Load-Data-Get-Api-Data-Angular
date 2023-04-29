import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGetDataComponent } from './api-get-data.component';

describe('ApiGetDataComponent', () => {
  let component: ApiGetDataComponent;
  let fixture: ComponentFixture<ApiGetDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGetDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
