import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { CategoriesStorage } from '../categories/categories-storage';
import { Category } from './../categories/Category';

@Injectable()
export class CategoryResolver implements Resolve<Category> {
    constructor(private router: Router) {
    }

    async resolve(route: ActivatedRouteSnapshot) {
        const currentCategory = CategoriesStorage.all.find(category => category.name === route.paramMap.get('categoryName'));

        if (currentCategory) {
            return currentCategory;
        }

        this.router.navigate(['../']);
    }
}
