import { Component, Input } from '@angular/core';
import { IAdvantageCardInformation } from '../../shared/types/advantage.interface';
import { fade } from 'src/app/core/animations/fade.animation';

@Component({
  selector: 'app-advantage-card',
  templateUrl: './advantage-card.component.html',
  styleUrls: ['./advantage-card.component.scss'],
  animations: [fade]
})
export class AdvantageCardComponent {
  @Input({ required: true }) information: IAdvantageCardInformation;

  constructor() {}
}
