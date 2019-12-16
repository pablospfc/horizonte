import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFolhasPagamentoComponent } from './list-folhas-pagamento.component';

describe('ListFolhasPagamentoComponent', () => {
  let component: ListFolhasPagamentoComponent;
  let fixture: ComponentFixture<ListFolhasPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFolhasPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFolhasPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
