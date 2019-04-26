import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonalizedComponent } from './personalized.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


describe('PersonalizedComponent', () => {
  let component: PersonalizedComponent;
  let fixture: ComponentFixture<PersonalizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedComponent ],
      imports: [ReactiveFormsModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
