import { Component, Input, OnInit } from '@angular/core';
import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { ISurvey } from '../../shared/types/survey.interface';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faCircleNotch,
  faEye,
  faEyeSlash,
  faSlash,
} from '@fortawesome/free-solid-svg-icons';
import { SurveyService } from '../../shared/services/survey/survey.service';
import { ISurveyInformation } from '../../shared/types/survey-information.interface';

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
    load: faCircleNotch,
  };

  form: FormGroup;
  get formControls() {
    return this.form.controls;
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

  isResult: boolean = false;
  isLoading: boolean = false;

  information: ISurveyInformation;

  constructor(private fb: FormBuilder, private surveyService: SurveyService) {}

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
    this.isLoading = true;
    this.surveyService
      .onInfo(this.survey.id)
      .subscribe((data) => {
        this.information = data;
        data.yesPercentage = `${parseFloat(data.yesPercentage).toFixed(0)}%`;
        data.noPercentage = `${parseFloat(data.noPercentage).toFixed(0)}%`;
        this.isResult = !this.isResult;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
