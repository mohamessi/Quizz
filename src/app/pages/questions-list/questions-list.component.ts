import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-questions-list', // <app-questions-list></app-questions-list>
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

 @Input() q : Question ;

  constructor() { }

  ngOnInit() {
  }


  checkResponse(q: Question, answer: string){
    if( answer === q.correct_answer){
      console.log('bonne response');
      q.isGoodAnswer = true;
      q.result = "Bravo tu as trouvé la bonne reponse";
    }
    else{
      console.log('mauvaise reponse');
      q.isGoodAnswer = false;
      q.result = "Désolé la bonne reponse est "+q.correct_answer;
    }
  }
}
