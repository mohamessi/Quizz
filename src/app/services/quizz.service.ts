import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TriviaResponse} from '../responses/trivia-response';



@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  url: string = 'https://opentdb.com/api.php?amount=10';
  urlPersonalized: string = 'https://opentdb.com/api.php';
    
  constructor(private http: HttpClient) { }

  getFastQuizz(nbQuestions: number){
    return this.http.get<TriviaResponse>(this.url);
  }

  getPersonalizedQuizz(nQuestion: number, difficulty: string, type:string)
  {
    return this.http.get<TriviaResponse>(this.urlPersonalized + '?amount=' + nQuestion + 
                                        '&difficulty=' + difficulty + '&type=' + type);
  }
}