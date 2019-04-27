import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizzService } from 'src/app/services/quizz.service';
import { Subscription } from 'rxjs';

import { Question } from 'src/app/models/question';
import { ParametersService } from 'src/app/services/parameters.service';

@Component({
  selector: 'app-personalized',
  templateUrl: './personalized.component.html',
  styleUrls: ['./personalized.component.scss']
})

export class PersonalizedComponent implements OnInit, OnDestroy
{
  questions: Array<Question>;
  
  difficulties: Array<string>;
  types: Array<string>;
  defaultAmount: number;
  defaultDifficulty: string;
  defaultType: string;
  
  personalizedSubscription: Subscription;
  parametersSubscription: Subscription;

  personalizedForm: FormGroup;

  constructor(private quizzService: QuizzService, private parametresService: ParametersService, 
              private formBuilder: FormBuilder) {}

  ngOnInit()
  {
    this.subscribeParameters();
    this.parametresService.emitParameters();
    this.defaultAmount = 10
    this.initForm(this.defaultAmount);
  }

  // user pure function
  initForm(defaultAmount)
  {
    this.personalizedForm = this.formBuilder.group({
      amount: [defaultAmount, [Validators.required, Validators.min(1), Validators.max(50)]],
      difficulty: [this.defaultDifficulty, Validators.required],
      type: [this.defaultType, Validators.required]
    });
  }

  // function non pure
  test(){
    let halfMonth = new Date(2019,4,15);
    let now = new Date();
    if(now.getTime() > halfMonth.getTime()){
      return 1;
    }
    return 2;
  }

  // function pure
  test2(date1: Date, date2: Date){
    if(date1.getTime() > date2.getTime()){
      return 1;
    }
    return 2;
  }

  // change method name to init
  subscribeParameters()
  {
    this.parametersSubscription =    
    this.parametresService.parametersSubject.subscribe(
      data => {
        this.difficulties = data.difficulties;
        this.types = data.types;
        this.defaultAmount = data.defaultAmount;
        this.defaultDifficulty = data.defaultDifficulty;
        this.defaultType = data.defaultType;
      }
    );
  }
  
  getPersonalizedQuestions()
  {
    const amount = this.personalizedForm.value['amount'];
    const difficulty = this.personalizedForm.value['difficulty'];
    const type = this.personalizedForm.value['type'];

    this.personalizedSubscription = 
    this.quizzService.getPersonalizedQuizz(amount, difficulty, type).subscribe(
      data => {
        console.log('data :', data);
        this.questions = data.results;
        this.questions.forEach(
          q => {
            q.incorrect_answers.push(q.correct_answer);
            q.incorrect_answers.sort();
          }
        );
      },
      err => {
        console.log('error :', err)
      }
    );
  }

  checkAnswer(q: Question, answer: string)
  {
    if (answer === q.correct_answer)
    {
      q.result = 'Bonne réponse';
      console.log(q.result);
      q.isGoodAnswer = true;
    }
    else
    {
      q.result = 'Mauvaise réponse';
      console.log(q.result);
      q.isGoodAnswer = false;
    }
  }

  initializeQuestionnaire()
  {
    console.log('Questionnaire inisialize');
    this.questions.forEach(
      q => {
        q.result = '';
      }
    );
  }

  ngOnDestroy()
  {
    this.personalizedSubscription.unsubscribe();
    this.parametersSubscription.unsubscribe();
  }
}
