import { Utilities } from './../common/utilities';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EntityService } from '../common/event.service';
import { StateService } from '../common/state.service';
import { Category } from './../categories/Category';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: [
    '../common/generic.component.scss',
    './experience.component.scss'
  ]
})
export class ExperienceComponent {
  experience: Category;

  category: Category;

  description: string;
  labels: string[];

  selected = {};

  constructor(private route: ActivatedRoute, private titleService: Title, private stateService: StateService, private entityService: EntityService) {
  }

  format(string: string) {
    return Utilities.convertNewLineToBr(string);
  }
  
  async ngOnInit() {
    this.route.data.subscribe(async data => {
      this.experience = data['experience'];
      this.category = data['category'];

      if (this.experience.id) {
        this.stateService.event.activities.push(this.experience.id);
      } else {
        //todo: remove after all have id's      
        this.stateService.event.activityTitles.push(this.experience.title);
      }

      this.titleService.setTitle(`${this.experience.title} - ${this.category.title} | Wekudo`);

      if (this.experience.id) {
        const entity = await this.entityService.getActivityById(this.experience.id);
        this.description = entity.description;
        this.labels = entity.activityLabels.map(({ label }) => label.name);
      }
    });
  }
}