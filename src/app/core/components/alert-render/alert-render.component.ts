import { Component } from '@angular/core';
import { AlertService } from '../../services/alert-service/alert.service';
import { SimpleButtonComponent } from '../simple-button/simple-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleExclamation, faClose } from '@fortawesome/free-solid-svg-icons';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-alert-render',
  templateUrl: './alert-render.component.html',
  styleUrls: ['./alert-render.component.scss'],
  standalone: true,
  providers: [],
  imports: [SimpleButtonComponent, FontAwesomeModule, NgIf],
})
export class AlertRenderComponent {
  icons = {
    close: faClose,
    success: faCircleCheck,
    error: faCircleExclamation
  };

  constructor(public alertService: AlertService) {}
}
