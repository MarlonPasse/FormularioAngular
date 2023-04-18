import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtatoComponent } from './comtato.component';

describe('ComtatoComponent', () => {
  let component: ComtatoComponent;
  let fixture: ComponentFixture<ComtatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComtatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComtatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
