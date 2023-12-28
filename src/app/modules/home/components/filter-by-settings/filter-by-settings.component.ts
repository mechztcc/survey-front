import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  NavigationBehaviorOptions,
  NavigationExtras,
  ParamMap,
  Router,
} from '@angular/router';
import {
  faFilterCircleXmark,
  faGrip,
  faGripVertical,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-by-settings',
  templateUrl: './filter-by-settings.component.html',
  styleUrls: ['./filter-by-settings.component.scss'],
})
export class FilterBySettingsComponent implements OnInit {
  icons = {
    vertical: faGripVertical,
    horizontal: faGrip,
    clear: faFilterCircleXmark,
  };

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  get isAsc() {
    return this.formControls['order'].value == 'ASC';
  }

  get isDesc() {
    return this.formControls['order'].value == 'DESC';
  }

  constructor(
    private routes: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.routes.queryParams.subscribe((params: ParamMap) => {
      const queryParams = { ...params };
      this.formControls['order'].setValue(queryParams['order'] ?? 'ASC');
    });
  }

  initForm() {
    this.form = this.fb.group({
      order: ['ASC', Validators.required],
    });
  }

  onClear() {
    window.location.href = '/search';
  }

  onOrder(order: 'ASC' | 'DESC') {
    this.router.navigate([], {
      relativeTo: this.routes,
      queryParams: { order },
      queryParamsHandling: 'merge',
    });
  }
}
