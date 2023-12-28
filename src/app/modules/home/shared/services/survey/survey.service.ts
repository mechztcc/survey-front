import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISurvey } from '../../types/survey.interface';
import { ISurveyInformation } from '../../types/survey-information.interface';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  onTrending(): Observable<ISurvey[]> {
    return this.http.get<any>(`survey/trending/auth`);
  }

  onTrendingNoAuth(): Observable<ISurvey[]> {
    return this.http.get<any>(`survey/trending`);
  }

  onInfo(id: number): Observable<ISurveyInformation> {
    return this.http.get<ISurveyInformation>(`survey/${id}/info`);
  }

  onVote(id: number, vote: string): Observable<any> {
    return this.http.post<any>(`survey/vote/${id}`, { answer: vote });
  }
}
