app.directive('tasteDirective', ()=>{
  return {
    restrict: 'E',
    templateUrl: 'views/tastes/tastes.template.html',
    scope: {
      info : '=',
      fn: '='
    }
  }
})
