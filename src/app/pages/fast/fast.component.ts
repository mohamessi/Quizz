import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { Question } from '../../models/question';
import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.scss']
})
export class FastComponent implements OnInit {

  questions: Array<Question>;
  numberOfQuestions: number;
  

  registrationForm = this.fb.group({
    cityName: [''],
    pays:['']
  });

  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  paysList: any = ['France', 'Usa', 'angletterre']

  

  constructor(private quizzService: QuizzService,private fb: FormBuilder) { }

  ngOnInit() {
    this.numberOfQuestions = 10;
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

  onSubmit() {
    console.log(this.registrationForm.value);
    
  }

  changeCity(e) {
    this.registrationForm.get("cityName").setValue(e.target.value, {
      onlySelf: true
    });
  }

  getNumbersOfQuestions(): number{
    return this.numberOfQuestions;
  }
  
}
