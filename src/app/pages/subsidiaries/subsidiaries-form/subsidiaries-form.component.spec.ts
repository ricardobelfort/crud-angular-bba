import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidiariesFormComponent } from './subsidiaries-form.component';

describe('SubsidiariesFormComponent', () => {
  let component: SubsidiariesFormComponent;
  let fixture: ComponentFixture<SubsidiariesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsidiariesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsidiariesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
