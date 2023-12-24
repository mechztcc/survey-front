import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.scss'],
})
export class FormCreateAccountComponent implements OnInit {
  icons = {
    eye: faEye,
    slash: faEyeSlash,
    email: faEnvelope,
    person: faUser,
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
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(10)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      document: ['', Validators.required],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }
}
