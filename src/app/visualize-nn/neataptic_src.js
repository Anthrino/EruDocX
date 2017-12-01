var Node = neataptic.Node;
var Neat = neataptic.Neat;
var Network = neataptic.Network;
var Methods = neataptic.Methods;
var Architect = neataptic.Architect;
var Trainer = neataptic.Trainer;
var architect = neataptic.architect;

var A = new Node();
var B = new Node();
var C = new Node();
var D = new Node();
var E = new Node();
var F = new Node();

// var nodes = [A, B, C, D, E, F];
//
// for (var i = 0; i < nodes.length - 1; i++) {
//   node = nodes[i];
//   for (var j = 0; j < 2; j++) {
//     var connectTo = nodes[Math.floor(Math.random() * (nodes.length - i) + i)];
//     node.connect(connectTo);
//   }
// }
//
// var network = architect.Construct(nodes);

// var network = new architect.Perceptron(2, 10, 10, 2);
//
// for(node in network.nodes){
//   var node = network.nodes[node];
//   node.mutate(Methods.Mutation.MOD_ACTIVATION)
// }

// network.activate([0,1]);

// Create connections
  A.connect(B);
  A.connect(C);
  B.connect(D);
  C.connect(D);

  // Construct a network
  var network = architect.Construct([A, B, C, D]);
  drawGraph(network.graph(1000,1000), '.draw');
