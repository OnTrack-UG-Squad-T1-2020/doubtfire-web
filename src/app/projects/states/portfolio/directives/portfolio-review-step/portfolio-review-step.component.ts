import { Component } from '@angular/core';
import { MatStep } from '@angular/material/stepper';
import { PortfolioContainerComponent } from '../portfolio-container/portfolio-container.component';

@Component({
  selector: 'portfolio-review-step',
  templateUrl: './portfolio-review-step.component.html',
  styleUrls: ['./portfolio-review-step.component.scss']
})
export class PortfolioReviewStepComponent {

  constructor(
    public container: PortfolioContainerComponent,
    public step: MatStep,
  ) { }

}
