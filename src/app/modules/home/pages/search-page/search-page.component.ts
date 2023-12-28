import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurveyService } from '../../shared/services/survey/survey.service';
import { addMultipleSurveys } from '../../shared/stores/search.actions';
import * as selectors from '../../shared/stores/search.selectors';
import { ISurvey } from '../../shared/types/survey.interface';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  isLoading: boolean = false;
  surveys: ISurvey[] = [];

  config = {
    totalItems: 0,
    totalPages: [],
    prevPage: null,
    nextPage: null,
  };

  searchList$ = this.store.select(selectors.selectAllSurveys);

  constructor(
    public routes: ActivatedRoute,
    private surveyService: SurveyService,
    private store: Store<ISurvey[]>,
    private router: Router
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
    this.isLoading = true;
    this.surveyService
      .onFindWithFilters(params)
      .subscribe((response) => {
        this.config = {
          nextPage: response['nextPage'],
          prevPage: response['prevPage'],
          totalItems: response['totalItems'],
          totalPages: [],
        };
        for (let index = 0; index < response['totalPages']; index++) {
          this.config.totalPages.push(index + 1);
        }
        this.store.dispatch(addMultipleSurveys({ payload: response['data'] }));
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  onSearch(page: number) {
    this.router.navigate([], {
      relativeTo: this.routes,
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }
}
