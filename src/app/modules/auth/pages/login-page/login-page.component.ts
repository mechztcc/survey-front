import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/core/animations/fade.animation';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [fade],
})
export class LoginPageComponent implements OnInit {
  ngOnInit(): void {
    localStorage.clear();
  }
}
