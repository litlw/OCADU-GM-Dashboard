app.directive('tasteDirective', ['treeDiagram', (treeDiagram)=>{
  return {
    restrict: 'E',
    templateUrl: 'views/tastes/tastes.template.html',
    scope: {
      info : '=',
      fn: '='
    },
    link: function(scope){
      treeDiagram.makeTree("right", ()=>{
        console.log("made a tree");
      })
    }
  }
}])
