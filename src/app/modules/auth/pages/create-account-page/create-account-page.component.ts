import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/core/animations/fade.animation';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.scss'],
  animations: [fade],
})
export class CreateAccountPageComponent implements OnInit {
  ngOnInit(): void {
    localStorage.clear();
  }
}
