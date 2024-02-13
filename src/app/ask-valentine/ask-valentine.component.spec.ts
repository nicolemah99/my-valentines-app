import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskValentineComponent } from './ask-valentine.component';

describe('AskValentineComponent', () => {
  let component: AskValentineComponent;
  let fixture: ComponentFixture<AskValentineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskValentineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskValentineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
