import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISurvey } from '../../types/survey.interface';
import { ISurveyInformation } from '../../types/survey-information.interface';
import { ISearchSurveyParams } from '../../types/search-survey-params.interface';

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

  onFindWithFilters(params: ISearchSurveyParams): Observable<ISurvey[]> {
    return this.http.get<any>(
      `survey/list?order=${params.order}&page=${params.page}&status=${params.status}&votes=${params.vote}`
    );
  }
}
