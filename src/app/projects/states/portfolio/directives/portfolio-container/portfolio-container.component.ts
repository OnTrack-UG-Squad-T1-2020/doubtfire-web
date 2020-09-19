import { Component, Inject, Input, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { clamp } from 'lodash';
import { projectService, unitService } from 'src/app/ajs-upgraded-providers';

interface PortfolioTab {
  name: string;
  title: string;
}

@Component({
  selector: 'app-portfolio-container',
  templateUrl: './portfolio-container.component.html',
  styleUrls: ['./portfolio-container.component.scss']
})
export class PortfolioContainerComponent {

  constructor(
    @Inject(projectService) private projectService: any,
    @Inject(unitService) private unitService: any,
  ) {
  }

  @Input() project: any;
  @Input() unit: any;

  @ViewChild('tabGroup') tabGroup: MatTabGroup;

  tabs: PortfolioTab[] = [
    { name: 'welcome', title: 'Portfolio Preparation' },
    { name: 'grade', title: 'Select Grade' },
    { name: 'learning-summary', title: 'Learning Summary Report' },
    { name: 'tasks', title: 'Select Tasks' },
    { name: 'extra-files', title: 'Upload Other Files' },
    { name: 'review', title: 'Review Portfolio' },
  ];

  /**
   * Advances the portfolio tab control by the specified number of steps.
   */
  advance(by: number) {
    this.tabGroup.selectedIndex = clamp(this.tabGroup.selectedIndex + by, 0, this.tabs.length - 1);
  }
}
