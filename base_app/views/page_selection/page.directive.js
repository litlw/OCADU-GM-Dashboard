app.directive('pageSelectionDirective', ['treeDiagram',(treeDiagram)=>{
  return {
    restrict: 'E',
    templateUrl: 'views/page_selection/page.template.html',
    scope: {
      fn : '='
    },
    link: function(scope){
      treeDiagram.makeTree("left", ()=>{
        console.log("made a tree");
      })
    }
  }
}])
