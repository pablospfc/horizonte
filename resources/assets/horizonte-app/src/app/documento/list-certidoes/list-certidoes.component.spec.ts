import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCertidoesComponent } from './list-certidoes.component';

describe('ListCertidoesComponent', () => {
  let component: ListCertidoesComponent;
  let fixture: ComponentFixture<ListCertidoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCertidoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCertidoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
