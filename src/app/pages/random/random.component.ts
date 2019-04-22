import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { Question } from '../../models/question';
import { TriviaResponse } from 'src/app/responses/trivia-response';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  constructor(private quizService: QuizzService) { }
  randomRandom: String = "?amount=16&category=15&difficulty=medium&type=multiple"

  difficulty: string[] = ['easy', 'medium', 'hard'];
  type: string[] = ['multiple', 'boolean'];
  questions: Array<Question>;

  ngOnInit() {
    this.getRandomQuestions() ;
  }




  getRandomQuestions(){

     let am = Math.floor(Math.random()*(50-10+1)+10) ;
     let cat = Math.floor(Math.random()*(30+1))   ;
     let diff =  this.difficulty[Math.floor(Math.random()*(2+1))] ;
     let tp = this.type[Math.floor(Math.random()*(2))] ;
     this.quizService.getRandomQuestions(am,cat,diff,tp).subscribe(
      data => {
        console.log("data : ",data);
        this.questions = data.results;
        this.questions.forEach(e => {
          e.incorrect_answers.push(e.correct_answer);
          e.incorrect_answers.sort();
        });

      },
      err => {
        console.log("err : ",err);
      }
    )

}
 
}
