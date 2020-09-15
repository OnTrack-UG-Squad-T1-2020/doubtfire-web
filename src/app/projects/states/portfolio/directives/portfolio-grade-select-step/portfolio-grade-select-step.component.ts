import { Component } from '@angular/core';
import { PortfolioContainerComponent } from '../portfolio-container/portfolio-container.component';

@Component({
  selector: 'portfolio-grade-select-step',
  templateUrl: './portfolio-grade-select-step.component.html',
  styleUrls: ['./portfolio-grade-select-step.component.scss']
})
export class PortfolioGradeSelectStepComponent {

  constructor(
    public container: PortfolioContainerComponent,
  ) { }

}