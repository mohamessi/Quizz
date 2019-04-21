import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

  checkResponse(answer){
    if( answer === this.question.correct_answer){
      console.log('bonne response');
      this.question.isGoodAnswer = true;
      this.question.result = "Bravo tu as trouvé la bonne reponse";
    }
    else{
      console.log('mauvaise reponse');
      this.question.isGoodAnswer = false;
      this.question.result = "Désolé la bonne reponse est "+this.question.correct_answer;
    }
  }

}
