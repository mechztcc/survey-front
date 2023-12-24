import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  icons = {
    eye: faEye,
    slash: faEyeSlash,
    email: faEnvelope,
  };

  isPass: boolean = false;

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onHandlePass() {
    this.isPass = !this.isPass;
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }
}
