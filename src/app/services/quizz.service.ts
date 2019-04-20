import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TriviaResponse} from '../responses/trivia-response';



@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  url: string = 'https://opentdb.com/api.php?amount=10';
  //url: string = 'https://raw.githubusercontent.com/mohamessi/Savana/master/QuestionAnswer.json';
  constructor(private http: HttpClient) { }

  getFastQuizz(nbQuestions: number){
    return this.http.get<TriviaResponse>(this.url);
  }

  getRandomQuestions(amount,category,difficulty,type){
    let urlRand = 'https://opentdb.com/api.php?amount=16&category=15&difficulty=medium&type=multiple'
      let url2 =  'https://opentdb.com/api.php?amount='+amount+'&category='+category+'&difficulty='+difficulty+'&type='+type;
      console.log(url2);
      return this.http.get<TriviaResponse>(url2) ;
    
  }

}
