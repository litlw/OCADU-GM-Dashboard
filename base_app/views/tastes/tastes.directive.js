app.directive('tasteDirective', ['chartSetup', (chartSetup)=>{
  return {
    restrict: 'E',
    templateUrl: 'views/tastes/tastes.template.html',
    scope: {
      info : '=',
      fn: '='
    },
    link: function(scope){
      //
      chartSetup.makeChart("right", ()=>{
        console.log("made a chart");
      })
    }
  }
}])
