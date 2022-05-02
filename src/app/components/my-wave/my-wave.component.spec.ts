import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWaveComponent } from './my-wave.component';

describe('MyWaveComponent', () => {
  let component: MyWaveComponent;
  let fixture: ComponentFixture<MyWaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
