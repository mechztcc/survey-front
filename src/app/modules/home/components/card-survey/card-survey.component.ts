import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { ISurvey } from '../../shared/types/survey.interface';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faCheckCircle,
  faCircleNotch,
  faEye,
  faEyeSlash,
  faSlash,
} from '@fortawesome/free-solid-svg-icons';
import { SurveyService } from '../../shared/services/survey/survey.service';
import { ISurveyInformation } from '../../shared/types/survey-information.interface';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert-service/alert.service';
import { fade } from 'src/app/core/animations/fade.animation';

@Component({
  selector: 'app-card-survey',
  templateUrl: './card-survey.component.html',
  styleUrls: ['./card-survey.component.scss'],
  animations: [fade]
})
export class CardSurveyComponent implements OnInit {
  @Input() survey: ISurvey;
  icons = {
    question: faQuestionCircle,
    clock: faClock,
    eye: faEye,
    slash: faEyeSlash,
    load: faCircleNotch,
    check: faCheckCircle,
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
    return `${hours}hrs`;
  }

  isResult: boolean = false;
  isLoading: boolean = false;
  isVoting: boolean = false;

  information: ISurveyInformation;

  get hasSession() {
    return localStorage.getItem('token');
  }

  constructor(
    private fb: FormBuilder,
    private surveyService: SurveyService,
    private routes: ActivatedRoute,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      value: ['empty', Validators.required],
    });
  }

  onHandleAlternative(value: 'yes' | 'no', event: MouseEvent) {
    if (!this.hasSession) {
      this.alertService.onRequireLogin();
      event.preventDefault();
      return;
    }
    if (this.formControls['value'].touched) {
      event.preventDefault();
      return;
    }

    this.isVoting = true;
    this.formControls['value'].setValue(value);
    this.surveyService
      .onVote(this.survey.id, value)
      .subscribe((data) => {
        console.log(data);
      })
      .add(() => {
        this.isVoting = false;
      });
  }

  onHandleResult() {
    this.isLoading = true;
    this.surveyService
      .onInfo(this.survey.id)
      .subscribe((data) => {
        this.information = data;
        if (data) {
          data.yesPercentage =
            `${parseFloat(data.yesPercentage).toFixed(0)}%` ?? `0%`;
          data.noPercentage =
            `${parseFloat(data.noPercentage).toFixed(0)}%` ?? `0%`;
        }
        this.isResult = !this.isResult;
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
