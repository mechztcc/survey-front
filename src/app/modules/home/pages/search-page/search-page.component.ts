import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SurveyService } from '../../shared/services/survey/survey.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  constructor(
    public routes: ActivatedRoute,
    private surveyService: SurveyService
  ) {}

  ngOnInit(): void {
    this.routes.queryParams.subscribe((params) => {
      const vote = params['votes'] ?? 0;
      const page = params['page'] ?? 1;
      const take = params['take'] ?? 10;
      const status = params['status'] ?? 'opened';
      const order = params['order'] ?? 'ASC';

      const query = {
        vote,
        page,
        take,
        status,
        order,
      };
      this.onFind(query);
    });
  }

  onFind(params: any) {
    this.surveyService.onFindWithFilters(params).subscribe(console.log);
  }
}
