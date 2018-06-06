import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { StateService } from './state.service';

@Injectable()
export class SubCategoriesResolver implements Resolve<void> {
    constructor(private state: StateService, private router: Router) {
    }

    async resolve() {
        if (!this.state.event.activities.length && !this.state.event.activityTitles.length) {
            this.router.navigate(['/']);
        }
    }
}
