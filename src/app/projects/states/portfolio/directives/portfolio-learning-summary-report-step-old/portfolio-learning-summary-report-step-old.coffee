angular.module('doubtfire.projects.states.portfolio.directives.portfolio-learning-summary-report-step-old', [])

#
# Step to justify the portfolio with a Learning Summary Report
#
.directive('portfolioLearningSummaryReportStepOld', ->
  restrict: 'E'
  replace: true
  templateUrl: 'projects/states/portfolio/directives/portfolio-learning-summary-report-step-old/portfolio-learning-summary-report-step-old.tpl.html'
  controller: ($scope) ->
    $scope.forceLSRSubmit = false
)
