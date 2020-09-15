import { Component } from '@angular/core';
import { PortfolioContainerComponent } from '../portfolio-container/portfolio-container.component';

@Component({
  selector: 'portfolio-tasks-step',
  templateUrl: './portfolio-tasks-step.component.html',
  styleUrls: ['./portfolio-tasks-step.component.scss']
})
export class PortfolioTasksStepComponent {
  
  constructor(
    public container: PortfolioContainerComponent,
  ) { }

}