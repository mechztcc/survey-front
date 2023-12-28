import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../shared/services/survey/survey.service';
import { ISurvey } from '../../shared/types/survey.interface';

@Component({
  selector: 'app-trends-survey',
  templateUrl: './trends-survey.component.html',
  styleUrls: ['./trends-survey.component.scss'],
})
export class TrendsSurveyComponent implements OnInit {
  isLoading: boolean = false;
  trending: ISurvey[] = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.onFindTrendingAuth();
    } else {
      this.onFindTrendingNoAuth();
    }
  }

  onFindTrendingAuth() {
    this.isLoading = true;
    this.surveyService
      .onTrending()
      .subscribe((data) => {
        this.trending = data;
        console.log(data);
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  onFindTrendingNoAuth() {
    this.isLoading = true;
    this.surveyService
      .onTrendingNoAuth()
      .subscribe((data) => {
        this.trending = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
