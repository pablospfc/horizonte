import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFaturamentosComponent } from './list-faturamentos.component';

describe('ListFaturamentosComponent', () => {
  let component: ListFaturamentosComponent;
  let fixture: ComponentFixture<ListFaturamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFaturamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFaturamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
