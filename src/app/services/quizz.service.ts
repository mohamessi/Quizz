import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TriviaResponse} from '../responses/trivia-response';



@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  url: string = 'https://opentdb.com/api.php?amount=10';
  root: string = 'https://opentdb.com/api.php';
    
  constructor(private http: HttpClient) {}

  getFastQuizz(nbQuestions: number){
    return this.http.get<TriviaResponse>(this.url);
  }

  getPersonalizedQuizz(amount: number, difficulty: string, type: string)
  {
    var url: string = this.root + '?amount=' + amount;

    if (difficulty !== 'any')
      url += '&difficulty=' + difficulty;
    if (type !== 'any')
      url += '&type=' + type;
    
    return this.http.get<TriviaResponse>(url);
  }
}