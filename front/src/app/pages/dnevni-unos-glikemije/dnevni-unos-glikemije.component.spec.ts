import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DnevniUnosGlikemijeComponent} from './dnevni-unos-glikemije.component';
//
describe('DnevniUnosGlikemijeComponent', () => {
  let component: DnevniUnosGlikemijeComponent;
  let fixture: ComponentFixture<DnevniUnosGlikemijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnevniUnosGlikemijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnevniUnosGlikemijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


