import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCarrot,
  faDumbbell,
  faFutbol,
  faHeart,
  faMugHot,
  faPaw,
} from '@fortawesome/free-solid-svg-icons';
import IBadge from '../../types/badge.interface';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule],
})
export class BadgeComponent {
  @Input() info: IBadge;
  icons = {
    heart: faHeart,
    fit: faDumbbell,
    soccer: faFutbol,
    food: faCarrot,
    animal: faPaw,
    others: faMugHot,
  };
}
