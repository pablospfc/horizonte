import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoletosComponent } from './list-boletos.component';

describe('ListBoletosComponent', () => {
  let component: ListBoletosComponent;
  let fixture: ComponentFixture<ListBoletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBoletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
