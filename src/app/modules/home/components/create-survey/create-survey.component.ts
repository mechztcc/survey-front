import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faCalendar,
  faClose,
  faPlusCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { AlertService } from 'src/app/core/services/alert-service/alert.service';
import { FormsValidatorService } from 'src/app/core/services/forms-validator/forms-validator.service';
import { SurveyService } from '../../shared/services/survey/survey.service';
import { fade } from 'src/app/core/animations/fade.animation';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss'],
  animations: [fade]
})
export class CreateSurveyComponent implements OnInit {
  isModal: boolean = false;
  isLoading: boolean = false;

  icons = {
    add: faPlusCircle,
    close: faClose,
    question: faQuestionCircle,
    calendar: faCalendar,
  };

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  get hasErrorQuestion() {
    return this.formsValidator.fieldIsInvalidWithError(
      this.formControls['question']
    );
  }

  get hasErrorTime() {
    return this.formsValidator.fieldIsInvalidWithError(
      this.formControls['timeValue']
    );
  }

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    public formsValidator: FormsValidatorService,
    private surveysService: SurveyService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      question: ['', Validators.required],
      time: ['min', Validators.required],
      timeValue: [1, Validators.required],
    });
  }

  onHandleCreation() {
    if (!localStorage.getItem('token')) {
      this.alertService.onRequireLogin();
      return;
    }

    this.isModal = !this.isModal;
  }

  onClose() {
    this.isModal = false;
  }

  onCloseFromView(event: any) {
    const isFrame = Array(event.target.classList);
    if (isFrame[0]['value'].includes('frame')) {
      this.isModal = false;
    }
  }

  onHandleTimer(value: string) {
    this.formControls['time'].setValue(value);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    const time = this.formControls['time'].value;
    const value = this.formControls['timeValue'].value;
    const now = new Date();

    let expiresAt = new Date(now.setMinutes(now.getMinutes() + value));

    if (time == 'min') {
      expiresAt = new Date(now.setMinutes(now.getMinutes() + value));
    }

    if (time == 'hr') {
      expiresAt = new Date(now.setHours(now.getHours() + value));
    }

    if (time == 'day') {
      expiresAt = new Date(now.setDate(now.getDate() + value));
    }

    const payload = {
      question: this.formControls['question'].value,
      expiresAt,
    };

    this.surveysService
      .onCreate(payload)
      .subscribe((data) => {
        this.isModal = false;
        this.form.reset();
        this.alertService.onSuccess('Enquete crida com sucesso!');
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
