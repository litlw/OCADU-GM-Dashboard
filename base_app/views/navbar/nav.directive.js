app.directive("navDirective", function(){
  return {
    // stuff
    restrict: 'E',
    templateUrl: 'views/navbar/nav.template.html',
    scope: {
      links : "="
    }
  }
})

app.directive("footerDirective", function(){
  return {
    // stuff
    restrict: 'E',
    templateUrl: 'views/navbar/footer.template.html'
  }
})
