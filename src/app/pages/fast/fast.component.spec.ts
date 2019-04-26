import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { FastComponent } from './fast.component';

describe('FastComponent', () => {
  let component: FastComponent;
  let fixture: ComponentFixture<FastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 10 questions`, () => {
    expect(component.numberOfQuestions).toEqual(10);
  });
});
