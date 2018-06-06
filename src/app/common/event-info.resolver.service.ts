import { Injectable } from '@angular/core';
import {
    Router, Resolve
} from '@angular/router';
import { StateService } from './state.service';

@Injectable()
export class EventInfoResolver implements Resolve<void> {
    constructor(private state: StateService, private router: Router) {
    }

    async resolve() {
        if (!this.state.eventInfo) {
            this.router.navigate(['/']);
        }
    }
}
