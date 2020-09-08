import { Component, OnInit } from '@angular/core';
import { DoubtfireConstants } from 'src/app/config/constants/doubtfire-constants';

@Component({
  selector: 'app-portfolio-welcome-step',
  templateUrl: './portfolio-welcome-step.component.html',
  styleUrls: ['./portfolio-welcome-step.component.scss']
})
export class PortfolioWelcomeStepComponent implements OnInit {

  externalName: string;

  constructor(
    private constants: DoubtfireConstants
  ) {
  }

  ngOnInit() {
    this.constants.ExternalName.subscribe((externalName) => this.externalName = externalName);
  }

}
