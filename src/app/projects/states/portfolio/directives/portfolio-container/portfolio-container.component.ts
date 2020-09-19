import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
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
export class PortfolioContainerComponent implements OnInit {

  constructor(
    @Inject(projectService) private projectService: any,
    @Inject(unitService) private unitService: any,
  ) {
  }

  @Input() projectId: string;

  @ViewChild('tabGroup') tabGroup: MatTabGroup;

  tabs: PortfolioTab[] = [
    { name: 'welcome', title: 'Portfolio Preparation' },
    { name: 'grade', title: 'Select Grade' },
    { name: 'learning-summary', title: 'Learning Summary Report' },
    { name: 'tasks', title: 'Select Tasks' },
    { name: 'extra-files', title: 'Upload Other Files' },
    { name: 'review', title: 'Review Portfolio' },
  ];

  project: any = null;
  unit: any = null;

  /**
   * Set to `true` after loading attributes that might be accessed by steps of the portfolio wizard.
   */
  ready: boolean = false;

  ngOnInit() {
    // Populate `project` and `unit`; indicate ready.
    this.projectService.getProject(+this.projectId, null, (project) => {
      this.project = project;

      this.unit = this.unitService.getUnit(project.unit_id, (unit) => {
        this.unit = unit;
        this.ready = true;
      });
    });
  }

  /**
   * Advances the portfolio tab control by the specified number of steps.
   */
  advance(by: number) {
    this.tabGroup.selectedIndex = clamp(this.tabGroup.selectedIndex + by, 0, this.tabs.length - 1);
  }
}
