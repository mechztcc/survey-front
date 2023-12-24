import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleButtonComponent } from '../simple-button/simple-button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [SimpleButtonComponent, RouterModule, NgIf],
})
export class NavbarComponent {
  get isAuth() {
    return !window.location.href.includes('auth');
  }
}
