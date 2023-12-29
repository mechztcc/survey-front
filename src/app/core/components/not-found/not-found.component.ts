import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFileCircleQuestion
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule],
})
export class NotFoundComponent {
  icons = {
    question: faFileCircleQuestion,
  };
}
