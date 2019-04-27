import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;

  @Output() buttonClick = new EventEmitter();

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

  onButtonClick(){
    this.buttonClick.emit('Button was clicked');
  }

}
