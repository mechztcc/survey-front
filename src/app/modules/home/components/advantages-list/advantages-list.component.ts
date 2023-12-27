import { Component } from '@angular/core';
import { AdvantageListStepsService } from '../../shared/services/advantage-list-steps/advantage-list-steps.service';

@Component({
  selector: 'app-advantages-list',
  templateUrl: './advantages-list.component.html',
  styleUrls: ['./advantages-list.component.scss'],
})
export class AdvantagesListComponent {
  constructor(public steps: AdvantageListStepsService) {}
}
