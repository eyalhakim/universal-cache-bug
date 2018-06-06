import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../categories/Category';
import { CategoriesStorage } from '../categories/categories-storage';
import { ArrayHelper } from '../common/array-helper';
import { ExperienceHelper } from './../common/experience.helper';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.scss'
  ]
})
export class SearchComponent {

  options = ArrayHelper.uniqueBy([].concat(...CategoriesStorage.all.map(category => category.subCategories)), 'name');


  constructor(private router: Router) {
  }

  activitySelected(experience: Category) {
    this.router.navigate([ExperienceHelper.getUrl(experience)]);
  }
}
