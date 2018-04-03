import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse } from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaceholderService {

  private postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) {
  }

  // getSurveyQuestion(): Observable<Isurvey[]>{
  //   return this._http
  //     .get<Isurvey[]>('./src/survey.json')
  //     .do(data =>console.log('All : ' + JSON.stringify(data)))
  //     .catch(this.handleError);
  // }

}
