import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarSystemDiagramComponent } from './solar-system-diagram.component';

describe('SolarSystemDiagramComponent', () => {
  let component: SolarSystemDiagramComponent;
  let fixture: ComponentFixture<SolarSystemDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarSystemDiagramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarSystemDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
