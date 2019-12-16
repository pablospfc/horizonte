import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeclaracoesComponent } from './list-declaracoes.component';

describe('ListDeclaracoesComponent', () => {
  let component: ListDeclaracoesComponent;
  let fixture: ComponentFixture<ListDeclaracoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeclaracoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeclaracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
