import { Component } from '@angular/core';
import { faFilterCircleXmark, faGrip, faGripVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-by-settings',
  templateUrl: './filter-by-settings.component.html',
  styleUrls: ['./filter-by-settings.component.scss']
})
export class FilterBySettingsComponent {


  icons = {
    vertical: faGripVertical,
    horizontal: faGrip,
    clear: faFilterCircleXmark
  }
}
