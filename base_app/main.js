app.controller("mainController", ['$scope',
  function($scope){
  // some stuff will go in here.
  $scope.hello = "Hello World!"

}]);


// var i, j, node;
// var groupSep = 0.04;
//
// var nodeRadius = d3.scaleSqrt().range([3, 7]);
//
// var linkWidth = d3.scaleLinear().range([1.5, 2 * nodeRadius.range()[0]]);
//
// var margin = {
//   top: nodeRadius.range()[1] + 1,
//   right: nodeRadius.range()[1] + 1,
//   bottom: nodeRadius.range()[1] + 1,
//   left: nodeRadius.range()[1] + 1
// };
//
// var width = 4960 - margin.left - margin.right;
// var height = 800 - margin.top - margin.bottom;
//
// var x = d3.scaleLinear().range([0, width]);
//
// var svg = d3.select('svg')
//   .attr('width', width + margin.left + margin.right)
//   .attr('height', height + margin.top + margin.bottom)
//   .append('g')
//   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
//
// d3.json('data/fake_GM_data.json', function (error, graph) {
//   if (error) throw error;
//
//   var idToNode = {};
//
//   // Sort nodes by position in the index.
//
//   graph.tastes.sort(function (a, b) {
//     return d3.ascending(a.taste_id, b.taste_id);
//   });
//
//   // Compute x,y coordinates (have a little extra separation when we switch volumes)
//   for (i = 0, j = 0; i < graph.tastes.length; ++i) {
//     node = graph.tastes[i];
//     if (i > 0 && graph.tastes[i-1].taste_id != node.taste_id) ++j;
//     node.x = j * groupSep + i * (width - 4 * groupSep) / (graph.tastes.length - 1);
//     node.y = height;
//   }
//
//   graph.links.forEach(function (e) {
//     graph.tastes.forEach(function (n) {
//       idToNode[n.id] = n;
//       if(e.source == n.taste){
//         e.src_x = n.x;
//       }
//       if(e.target == n.taste){
//         e.trg_x = n.x
//       }
//     });
//   });
//
//   nodeRadius.domain(d3.extent(graph.tastes, function (d) { return d.values.length; }));
//
//   linkWidth.domain(d3.extent(graph.links, function (d) { return d.length; }));
//
//   var link = svg.append('g')
//     .attr('class', 'links')
//     .selectAll('path')
//     .data(graph.links)
//     .enter().append('path')
//     .attr('d', function (d) {
//       return ['M', d.src_x, height, 'A',
//         (d.src_x - d.trg_x)/2, ',',
//         (d.src_x - d.trg_x)/2, 0, 0, ',',
//         d.src_x < d.trg_x ? 1 : 0, d.trg_x, ',', height]
//         .join(' ');
//     })
//     .attr('stroke-width', function (d) { return 1.5*d.strength; })
//     .attr('stroke', function(d) {
//       if(d.strength < 0.2){
//         return '#aaa';
//       } else if(d.strength >0.2 && d.strength < 0.4){
//         return '#99a';
//       } else if(d.strength >0.4 && d.strength < 0.6){
//         return '#66a';
//       } else if(d.strength >0.6 && d.strength < 0.8){
//         return '#33a';
//       }else if(d.strength >0.8 && d.strength < 0.1){
//         return '#00a';
//       }
//     })
//     .attr('opacity', function(d){return d.strength})
//     .on('mouseover', function (d) {
//       link.style('stroke', null);
//       d3.select(this).style('stroke', '#d62333');
//       node.style('fill', function (node_d) {
//         return node_d === d.source || node_d === d.target ? 'black' : null;
//       });
//     })
//     .on('mouseout', function (d) {
//       node.style('fill', null);
//     });
//
//   var node = svg.append('g')
//     .attr('class', 'nodes')
//     .selectAll('circle')
//     .data(graph.tastes)
//     .enter().append('circle')
//     .attr('cx', function (d) { return d.x; })
//     .attr('cy', function (d) { return d.y; })
//     .attr('r', function (d) { return nodeRadius(d.values.length); })
//     .on('mouseover', function (d) {
//       node.style('fill', null);
//       d3.select(this).style('fill', 'black');
//       var nodesToHighlight = graph.links.map(function (e) { return e.source === d ? e.target : e.target === d ? e.source : 0})
//         .filter(function (d) { return d; });
//       node.filter(function (d) { return nodesToHighlight.indexOf(d) >= 0; })
//         .style('fill', '#555');
//       link.style('stroke', function (link_d) {
//         return link_d.source === d | link_d.target === d ? '#d62333' : null;
//       });
//     })
//     .on('mouseout', function (d) {
//       node.style('fill', null);
//       link.style('stroke', null);
//     });
//
//   node.append('title').text(function (d) { return d.taste; });
//
// });
