import { Component } from '@angular/core';
import { PortfolioContainerComponent } from '../portfolio-container/portfolio-container.component';

@Component({
  selector: 'portfolio-add-extra-files-step',
  templateUrl: './portfolio-add-extra-files-step.component.html',
  styleUrls: ['./portfolio-add-extra-files-step.component.scss']
})
export class PortfolioAddExtraFilesStepComponent {

  constructor(
    public container: PortfolioContainerComponent,
  ) { }

}