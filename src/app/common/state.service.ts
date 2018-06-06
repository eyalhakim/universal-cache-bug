import { Injectable } from "@angular/core";
import { Category } from '../categories/Category';
import { ArrayHelper } from "./array-helper";

export class Event {
    id: number;
    headcount: number;
    budgetRange = [30, 45];
    food: boolean;
    drinks: boolean;
    email: string;
    collaborators: string[] = [];
    activities: number[] = [];
    activityTitles: string[] = [];
    startTime: string;
    optionalDates: string[] = [];
    isStartTimeFlex: boolean;
    foodCategory: number;
    drinkCategory: number;
    addons: number[] = [];
    coiRequired = true;
}

export class Activity {
    id: number;
    description: string;
    activityLabels: [{ label: { name: string } }]
}

@Injectable()
export class StateService {
    static changeSelectedStatus<T>(list: T[], id: T, isSelected: boolean) {
        if (isSelected) {
            list.push(id);
        } else {
            ArrayHelper.removeWhere(list, selectedId => selectedId === id);
        }
    }

    event = new Event();
    selectedCategories: Category[] = [];

    eventInfo: boolean;

    reset() {
        this.event = new Event();
        this.selectedCategories = [];
        this.eventInfo = null;
    }
}