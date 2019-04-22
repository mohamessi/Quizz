import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.scss']
})
export class FastComponent implements OnInit {

  questions: Array<Question>;

  constructor(private quizzService: QuizzService) { }

  ngOnInit() {
    this.getFastQuestions();
  }

  getFastQuestions(){
    this.quizzService.getFastQuizz(10).subscribe(
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
