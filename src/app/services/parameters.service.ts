import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {
  
  private parameters = {
    difficulties: [
      {value:'any', label: 'Ant Difficulty'},
      {value:'easy', label: 'Easy'},
      {value:'medium', label: 'Medium'},
      {value:'hard', label: 'Hard'}
    ],
    types: [
      {value: 'any', label: 'Any Type'},
      {value: 'multiple', label: 'Multiple Choice'},
      {value: 'boolean', label: 'True / False'}
    ],
    defaultAmount: '10',
    defaultDifficulty: 'any',
    defaultType: 'any'
  };

  parametersSubject = new Subject<any>();

  emitParameters()
  {
    this.parametersSubject.next(this.parameters);
  }

  getDifficulties(){
    return this.parameters.difficulties;
  }

  // create multiple methods for each parameters
}
