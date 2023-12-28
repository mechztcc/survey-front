import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HowToStartComponent } from './components/how-to-start/how-to-start.component';
import { AdvantagesListComponent } from './components/advantages-list/advantages-list.component';
import { StepsAdvantagesComponent } from './components/steps-advantages/steps-advantages.component';
import { AdvantageCardComponent } from './components/advantage-card/advantage-card.component';
import { SimpleButtonComponent } from 'src/app/core/components/simple-button/simple-button.component';
import { CardSurveyComponent } from './components/card-survey/card-survey.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrendsSurveyComponent } from './components/trends-survey/trends-survey.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FilterByCategoryComponent } from './components/filter-by-category/filter-by-category.component';
import { BadgeComponent } from 'src/app/core/components/badge/badge.component';
import { FilterByVotesComponent } from './components/filter-by-votes/filter-by-votes.component';
import { FilterByDoneComponent } from './components/filter-by-done/filter-by-done.component';
import { FilterBySettingsComponent } from './components/filter-by-settings/filter-by-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    HowToStartComponent,
    AdvantagesListComponent,
    StepsAdvantagesComponent,
    AdvantageCardComponent,
    CardSurveyComponent,
    TrendsSurveyComponent,
    SearchPageComponent,
    FilterByCategoryComponent,
    FilterByVotesComponent,
    FilterByDoneComponent,
    FilterBySettingsComponent,
    CreateSurveyComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SimpleButtonComponent,
    FontAwesomeModule,
    BadgeComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
