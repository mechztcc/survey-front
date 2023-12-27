import { Component } from '@angular/core';
import { AdvantageListStepsService } from '../../shared/services/advantage-list-steps/advantage-list-steps.service';
import { fade } from 'src/app/core/animations/fade.animation';

@Component({
  selector: 'app-steps-advantages',
  templateUrl: './steps-advantages.component.html',
  styleUrls: ['./steps-advantages.component.scss'],
  animations: [fade]
})
export class StepsAdvantagesComponent {
  steps: number[] = [0, 1, 2];
  constructor(public stepsService: AdvantageListStepsService) {}

  onChange(index: number) {
    this.stepsService.selected = index;
  }
}
