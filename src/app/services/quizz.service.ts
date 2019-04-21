import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TriviaResponse} from '../responses/trivia-response';
const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');




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


}
