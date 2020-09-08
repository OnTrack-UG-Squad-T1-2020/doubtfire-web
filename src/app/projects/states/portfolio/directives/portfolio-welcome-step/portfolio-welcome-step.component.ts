import { Component, OnInit } from '@angular/core';
import { DoubtfireConstants } from 'src/app/config/constants/doubtfire-constants';
import { PortfolioContainerComponent } from '../portfolio-container/portfolio-container.component';

@Component({
  selector: 'portfolio-welcome-step',
  templateUrl: './portfolio-welcome-step.component.html',
  styleUrls: ['./portfolio-welcome-step.component.scss']
})
export class PortfolioWelcomeStepComponent implements OnInit {

  externalName: string;

  constructor(
    public container: PortfolioContainerComponent,
    private constants: DoubtfireConstants
  ) {
  }

  ngOnInit() {
    this.constants.ExternalName.subscribe((externalName) => this.externalName = externalName);
  }

}
