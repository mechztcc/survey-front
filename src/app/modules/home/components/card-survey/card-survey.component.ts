import { Component, Input, OnInit } from '@angular/core';
import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { ISurvey } from '../../shared/types/survey.interface';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye, faEyeSlash, faSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-survey',
  templateUrl: './card-survey.component.html',
  styleUrls: ['./card-survey.component.scss'],
})
export class CardSurveyComponent implements OnInit {
  @Input() survey: ISurvey;
  icons = {
    question: faQuestionCircle,
    clock: faClock,
    eye: faEye,
    slash: faEyeSlash,
  };

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  isResult: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      value: ['empty', Validators.required],
    });
  }

  onHandleAlternative(value: 'yes' | 'no') {
    if (this.formControls['value'].touched) {
      return;
    }
    this.formControls['value'].setValue(value);
  }

  onHandleResult() {
    this.isResult = !this.isResult;
  }

  get isCheked() {
    return (
      this.formControls['value'].value == 'yes' ||
      this.formControls['value'].value == 'no'
    );
  }

  get remainingTime() {
    const end = moment(new Date(this.survey.expires_at));
    const now = moment(new Date());

    const hours = end.diff(now, 'hours');
    const min = end.diff(now, 'minutes');

    return `${hours}hrs e ${min}`;
  }
}
