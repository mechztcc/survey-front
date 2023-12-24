import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class FooterComponent {
  get isAuth() {
    return !window.location.href.includes('auth');
  }
}
