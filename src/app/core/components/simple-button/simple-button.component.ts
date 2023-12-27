import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  standalone: true,
  styleUrls: ['./simple-button.component.scss'],
  imports: [NgIf, FontAwesomeModule],
})
export class SimpleButtonComponent {
  @Input() label: string;
  @Input() full: boolean = false;
  @Input() type: 'submit' | 'button' = 'button';
  @Input() loading: boolean = false;

  icons = {
    load: faCircleNotch,
  };
}
