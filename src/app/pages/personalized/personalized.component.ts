import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-personalized',
  templateUrl: './personalized.component.html',
  styleUrls: ['./personalized.component.scss']
})
export class PersonalizedComponent implements OnInit, OnDestroy {

  defaultAmount = 10;  
  questions: Array<Question>;
  personalizedSubscription: Subscription;

  constructor(private quizzService: QuizzService) { }

  ngOnInit() {
  }

  getPersonalizedQuestions(form: NgForm)
  {
    const amount = form.value['amount'];
    const difficulty = form.value['difficulty'];
    const type = form.value['type'];

    this.personalizedSubscription = 
    this.quizzService.getPersonalizedQuizz(amount, difficulty, type).subscribe(
      response => {
        console.log("response :", response);
        this.questions = response.results;
        this.questions.forEach(
          q => {
            q.incorrect_answers.push(q.correct_answer);
            q.incorrect_answers.sort();
          }
        );
      },
      err => {
        console.log("error :", err)
      }
    );
  }

  checkAnswer(q: Question, answer: string)
  {
    if (answer === q.correct_answer)
    {
      console.log("Bonne réponse");
      q.result = "Bonne réponse";
      q.isGoodAnswer = true;
    }
    else
    {
      console.log("Mauvaise réponse");;      
      q.result = "Mauvaise réponse";
      q.isGoodAnswer = false;
    }
  }

  ngOnDestroy()
  {
    this.personalizedSubscription.unsubscribe();
  }
}
