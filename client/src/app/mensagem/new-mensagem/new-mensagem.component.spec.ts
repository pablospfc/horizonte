import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMensagemComponent } from './new-mensagem.component';

describe('NewMensagemComponent', () => {
  let component: NewMensagemComponent;
  let fixture: ComponentFixture<NewMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
