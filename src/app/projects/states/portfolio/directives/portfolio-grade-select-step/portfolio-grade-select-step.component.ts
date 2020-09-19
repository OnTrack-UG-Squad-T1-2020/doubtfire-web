import { Component, Inject, OnInit } from '@angular/core';
import { gradeService, Project } from 'src/app/ajs-upgraded-providers';
import { PortfolioContainerComponent } from '../portfolio-container/portfolio-container.component';

interface DisplayedGrade {
  index: number;
  grade: string;
  acronym: string;
}

@Component({
  selector: 'portfolio-grade-select-step',
  templateUrl: './portfolio-grade-select-step.component.html',
  styleUrls: ['./portfolio-grade-select-step.component.scss']
})
export class PortfolioGradeSelectStepComponent implements OnInit {

  constructor(
    public container: PortfolioContainerComponent,
    @Inject(gradeService) public gradeService: any,
    @Inject(Project) private Project: any,
  ) { }

  working: boolean = false;
  grades: DisplayedGrade[] = [];
  currentGrade: number | null = null;

  ngOnInit() {
    this.currentGrade = this.container.project.submitted_grade;

    // Populate grades.
    this.grades = this.gradeService.grades.map((grade, index) => ({
      index: index,
      grade: grade,
      acronym: this.gradeService.gradeAcronyms[index],
    } as DisplayedGrade));
  }

  /**
   * Invoked when the user selects a grade. Updates the submitted grade in the backend.
   */
  chooseGrade(grade: DisplayedGrade) {
    this.working = true;
    this.Project.update(
      {
        id: this.container.project.project_id,
        submitted_grade: grade.index,
      },
      () => {
        this.currentGrade = grade.index;
        this.working = false;
      }
    );
  }

}
