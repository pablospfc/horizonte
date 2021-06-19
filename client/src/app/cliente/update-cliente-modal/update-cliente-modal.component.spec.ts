import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClienteModalComponent } from './update-cliente-modal.component';

describe('UpdateClienteModalComponent', () => {
  let component: UpdateClienteModalComponent;
  let fixture: ComponentFixture<UpdateClienteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClienteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClienteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
