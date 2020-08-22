import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetalsComponent } from './item-detals.component';

describe('ItemDetalsComponent', () => {
  let component: ItemDetalsComponent;
  let fixture: ComponentFixture<ItemDetalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
