import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-filter-by-done',
  templateUrl: './filter-by-done.component.html',
  styleUrls: ['./filter-by-done.component.scss'],
})
export class FilterByDoneComponent implements OnInit {
  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  get opened() {
    return this.formControls['status'].value == 'opened';
  }

  get closed() {
    return this.formControls['status'].value == 'closed';
  }

  constructor(
    private fb: FormBuilder,
    private routes: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      status: ['opened', Validators.required],
    });

    this.routes.queryParams.subscribe((params: ParamMap) => {
      const queryParams = { ...params };
      this.formControls['status'].setValue(queryParams['status'] ?? 'opened');
    });
  }

  onHandle(status: 'opened' | 'closed') {
    this.formControls['status'].setValue(status);

    this.router.navigate([], {
      relativeTo: this.routes,
      queryParams: { status: this.formControls['status'].value },
      queryParamsHandling: 'merge',
    });
  }
}
