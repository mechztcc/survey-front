import { Component } from '@angular/core';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { fade } from 'src/app/core/animations/fade.animation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fade],
})
export class HomePageComponent {
  icons = {
    chart: faArrowTrendUp,
  };
}
