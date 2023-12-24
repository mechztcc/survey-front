import { Component } from '@angular/core';
import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card-survey',
  templateUrl: './card-survey.component.html',
  styleUrls: ['./card-survey.component.scss'],
})
export class CardSurveyComponent {
  icons = {
    question: faQuestionCircle,
    clock: faClock,
  };
}
