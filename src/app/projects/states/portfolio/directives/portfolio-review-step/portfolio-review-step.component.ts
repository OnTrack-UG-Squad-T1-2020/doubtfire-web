import { Component } from '@angular/core';
import { PortfolioContainerComponent } from '../portfolio-container/portfolio-container.component';

@Component({
  selector: 'portfolio-review-step',
  templateUrl: './portfolio-review-step.component.html',
  styleUrls: ['./portfolio-review-step.component.scss']
})
export class PortfolioReviewStepComponent {

  constructor(
    public container: PortfolioContainerComponent,
  ) { }

}