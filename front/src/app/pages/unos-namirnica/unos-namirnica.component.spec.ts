import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosNamirnicaComponent } from './unos-namirnica.component';

describe('UnosNamirnicaComponent', () => {
  let component: UnosNamirnicaComponent;
  let fixture: ComponentFixture<UnosNamirnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnosNamirnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosNamirnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
