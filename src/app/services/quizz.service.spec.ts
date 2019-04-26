import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { QuizzService } from './quizz.service';

describe('QuizzService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: QuizzService = TestBed.get(QuizzService);
    expect(service).toBeTruthy();
  });

  
});
