import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValEmailComponent } from './form-val-email.component';

describe('FormValEmailComponent', () => {
  let component: FormValEmailComponent;
  let fixture: ComponentFixture<FormValEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
