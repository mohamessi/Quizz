import { Question } from '../models/question';

export class TriviaResponse {
    response_code: number;
    results: Array<Question>;

}
