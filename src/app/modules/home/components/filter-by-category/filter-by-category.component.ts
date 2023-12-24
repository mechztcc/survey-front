import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-by-category',
  templateUrl: './filter-by-category.component.html',
  styleUrls: ['./filter-by-category.component.scss'],
})
export class FilterByCategoryComponent {
  icons = {
    search: faMagnifyingGlass,
  };
}
