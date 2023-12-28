import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription, timer } from 'rxjs';
import { FormsValidatorService } from 'src/app/core/services/forms-validator/forms-validator.service';
import { AuthService } from '../../shared/services/auth.service';
import { AlertService } from 'src/app/core/services/alert-service/alert.service';

@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.scss'],
})
export class FormCreateAccountComponent implements OnInit, OnDestroy {
  icons = {
    eye: faEye,
    slash: faEyeSlash,
    email: faEnvelope,
    person: faUser,
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

  ngOnDestroy(): void {}

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
      profile: ['admin', Validators.required],
      document: ['', Validators.required],
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
      name: this.formControls['name'].value,
      document: this.formControls['document'].value,
      profile: this.formControls['profile'].value,
    };

    this.authService
      .onCreateAccount(payload)
      .subscribe((data) => {
        this.alertService.onSuccess('Conta criada com sucesso!')
        this.timer$ = timer(2000).subscribe(() => {
          this.router.navigate(['/auth/login']);
        });
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

  isInvalidCPF() {
    return (
      this.formsValidator.isValidCPF(this.formControls['document'].value) &&
      this.formControls['document'].pristine
    );
  }
}
