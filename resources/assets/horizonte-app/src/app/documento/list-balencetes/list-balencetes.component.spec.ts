import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBalencetesComponent } from './list-balencetes.component';

describe('ListBalencetesComponent', () => {
  let component: ListBalencetesComponent;
  let fixture: ComponentFixture<ListBalencetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBalencetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBalencetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
