angular.module('doubtfire.projects.states.portfolio.directives.portfolio-tasks-step-old', [])

#
# Allows students to select which tasks they have completed can
# be included in their portfolio
#
.directive('portfolioTasksStepOld', ->
  restrict: 'E'
  replace: true
  templateUrl: 'projects/states/portfolio/directives/portfolio-tasks-step-old/portfolio-tasks-step-old.tpl.html'
  controller: ($scope) ->
    $scope.noTasksSelected = ->
      $scope.selectedTasks().length is 0
)
