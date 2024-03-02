import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKamelComponent } from './update-kamel.component';

describe('UpdateKamelComponent', () => {
  let component: UpdateKamelComponent;
  let fixture: ComponentFixture<UpdateKamelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateKamelComponent]
    });
    fixture = TestBed.createComponent(UpdateKamelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
