import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'plan-footer',
  templateUrl: './plan-footer.component.html',
  styleUrls: ['./plan-footer.component.scss']
})
export class PlanFooterComponent {

  @Input()
  stagesCompletion: number[];

  @Input()
  stagesTouched: boolean[];

  @Input()
  backUrl: string;

  @Input()
  nextUrl: string;

  @Input()
  nextLongTitle: string;

  @Input()
  nextShortTitle: string;

  @Input()
  showBack: boolean = true;

  @Input()
  disableNext: boolean;

  @Input()
  loadingNext: boolean;

  @Output()
  nextClick = new EventEmitter();
}
