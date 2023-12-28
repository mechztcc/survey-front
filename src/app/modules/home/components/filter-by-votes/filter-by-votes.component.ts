import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-filter-by-votes',
  templateUrl: './filter-by-votes.component.html',
  styleUrls: ['./filter-by-votes.component.scss'],
})
export class FilterByVotesComponent implements OnInit {
  icons = {};

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private routes: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.formControls['max'].disable();
  }

  initForm() {
    this.form = this.fb.group({
      min: [0, Validators.required],
      max: [0, Validators.required],
    });

    this.routes.queryParams.subscribe((params: ParamMap) => {
      const queryParams = { ...params };
      this.formControls['min'].setValue(queryParams['votes'] ?? 0);
    });
  }

  onSearch() {
    this.router.navigate([], {
      relativeTo: this.routes,
      queryParams: { votes: this.formControls['min'].value },
      queryParamsHandling: 'merge',
    });
  }
}
