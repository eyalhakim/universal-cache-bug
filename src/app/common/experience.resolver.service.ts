import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { CategoriesStorage } from '../categories/categories-storage';
import { Category } from './../categories/Category';

@Injectable()
export class ExperienceResolver implements Resolve<Category> {
    constructor(private router: Router) {
    }

    async resolve(route: ActivatedRouteSnapshot) {
        const currentExperience = [].concat(...CategoriesStorage.all.map(category => category.subCategories)).find(experience => experience.name === route.paramMap.get('experienceName'));

        if (currentExperience) {
            return currentExperience;
        }

        this.router.navigate(['../']);
    }
}
