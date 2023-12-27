import { Component, Input } from '@angular/core';
import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { ISurvey } from '../../shared/types/survey.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-card-survey',
  templateUrl: './card-survey.component.html',
  styleUrls: ['./card-survey.component.scss'],
})
export class CardSurveyComponent {
  @Input() survey: ISurvey;
  icons = {
    question: faQuestionCircle,
    clock: faClock,
  };

  get remainingTime() {
    const end = moment(new Date(this.survey.expires_at));
    const now = moment(new Date());

    const hours = end.diff(now, 'hours');
    const min = end.diff(now, 'minutes');

    return `${hours}hrs e ${min}`;
  }
}
