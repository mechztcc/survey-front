import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISurvey } from '../../types/survey.interface';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  onTrending(): Observable<ISurvey[]> {
    return this.http.get<any>(`survey`);
  }
}
