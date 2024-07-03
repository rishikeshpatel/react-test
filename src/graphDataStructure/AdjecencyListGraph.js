import React, { useState, useEffect } from 'react';
import { Edge } from './EdgeClass';

const AdjecencyListGraph = () => {
  const V = 4;
  const graphArray = new Array(V);
  const [graph, setGraph] = useState(null);

  useEffect(() => {
    creategraph(graphArray);
  }, []);

  useEffect(() => {
    console.log(graph);
    getNeighbourNode(0);
  }, [graph]);

  const creategraph = (graphArray) => {
    // Assigning edges
    graphArray = graphArray.fill(null).map(() => []);

    graphArray[0].push(new Edge(0, 2, 2));

    graphArray[1].push(new Edge(1, 2, 10));
    graphArray[1].push(new Edge(1, 3, 0));

    graphArray[2].push(new Edge(2, 0, 2));
    graphArray[2].push(new Edge(2, 1, 10));
    graphArray[2].push(new Edge(2, 3, -1));

    graphArray[3].push(new Edge(3, 1, 0));
    graphArray[3].push(new Edge(3, 2, -1));

    setGraph(graphArray);
  };

  const getNeighbourNode = (currentNode) => {
    if (!graph) {
      return;
    }
    for (var i = 0; i < graph[currentNode].length; i++) {
      let edge = graph[currentNode][i];
      console.log('Dest:', edge.dest);
    }
  };

  return (
    <div>
      <label>Graph Structure Adjecency List Example!</label>
      {graph &&
        graph.map((node, index) => {
          return (
            <div key={index}>
              <h2>Node: {index}</h2>
              <div>
                {node.map((edge, index) => {
                  return (
                    <label key={node.source}>
                      {' '}
                      Connect: {index + 1}, Destination: {edge.dest}, Weight: {edge.wt} ||
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AdjecencyListGraph;
