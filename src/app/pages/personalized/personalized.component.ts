import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-personalized',
  templateUrl: './personalized.component.html',
  styleUrls: ['./personalized.component.scss']
})
export class PersonalizedComponent implements OnInit {

  constructor(private quizzService: QuizzService) { }

  ngOnInit() {
  }

  getPersonalizedQuizz()
  {
  
  }

  displayElemForm()
  {}

}
