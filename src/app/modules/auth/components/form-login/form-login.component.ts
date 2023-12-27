import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../shared/services/auth.service';
import { FormsValidatorService } from 'src/app/core/services/forms-validator/forms-validator.service';
import { Subscription, timer } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert-service/alert.service';

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
  isLoading: boolean = false;
  timer$: Subscription;

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    public formsValidator: FormsValidatorService,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}

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

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;

    const payload = {
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
    };

    this.authService
      .onCreateSession(payload)
      .subscribe((data) => {
        
        this.alertService.onSuccess('Login realizado com sucesso!');
        console.log(this.alertService);
        // this.timer$ = timer(3000).subscribe(() => {
        //   this.router.navigate(['/']);
        // });
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  hasError(field: string) {
    return this.formsValidator.fieldIsInvalidWithError(
      this.formControls[field]
    );
  }
}
