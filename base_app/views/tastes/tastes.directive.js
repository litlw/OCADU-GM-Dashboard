app.directive('tasteDirective', ['barchart', (barchart)=>{
  return {
    restrict: 'E',
    templateUrl: 'views/tastes/tastes.template.html',
    scope: {
      info : '=',
      fn: '='
    },
    link: function(scope){
      //
      barchart.makeChart("right", ()=>{
        console.log("made a chart");
      })
    }
  }
}])
