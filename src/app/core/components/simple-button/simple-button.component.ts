import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  standalone: true,
  styleUrls: ['./simple-button.component.scss'],
})
export class SimpleButtonComponent {
  @Input() label: string;

  @Input() full: boolean = false;
}
