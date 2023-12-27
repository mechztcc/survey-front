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
    this.onFindTrending();
  }

  onFindTrending() {
    this.isLoading = true;

    this.surveyService
      .onTrending()
      .subscribe((data) => {
        this.trending = data;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
