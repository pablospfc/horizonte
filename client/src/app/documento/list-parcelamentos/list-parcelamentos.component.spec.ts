import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcelamentosComponent } from './list-parcelamentos.component';

describe('ListParcelamentosComponent', () => {
  let component: ListParcelamentosComponent;
  let fixture: ComponentFixture<ListParcelamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParcelamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParcelamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
