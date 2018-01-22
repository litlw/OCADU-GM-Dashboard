app.directive('pageSelectionDirective', ()=>{
  return {
    restrict: 'E',
    templateUrl: 'views/page_selection/page.template.html',
    scope: {
      fn : '='
    }
  }
})
