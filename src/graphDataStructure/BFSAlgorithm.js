import React, { useState, useEffect } from 'react';
import Queue from './QueueDataStructure';
import Stack from './StackdataStructure';
import bfsImage from '../assets/bfsImage.jpg';
import { Edge } from './EdgeClass';

const BFSAlgorithm = () => {
  const V = 6;
  const graphArray = new Array(V);
  const [graph, setGraph] = useState(null);
  const [TraversedStr, setTraversedStr] = useState('');
  const vis = new Array(V).fill(false);
  const rec = new Array(V).fill(false);
  let traversalStr = '';

  useEffect(() => {
    creategraph(graphArray);
  }, []);

  useEffect(() => {
    traversalStr = '';
  }, [TraversedStr]);
  useEffect(() => {
    if (graph) {
      // for (let i = 0; i < V; i++) {
      //   if (!vis[i]) {
      //     // bfs(graph, vis, i);
      //     // dfs(graph, i, vis);
      //     //finding cycle in directed graph.
      //     let isCycle = isCycleDirected(graph, vis, 0, rec);
      //     if (isCycle) {
      //       console.log(isCycle);
      //       break;
      //     }
      //   }
      // }
      // vis.forEach((node, index) => !node && dfs(graph, index, vis));
      // printAllPath(graph, vis, 0, '0', 5);
      // topSort(graph, V);
    }
  }, [graph]);

  const creategraph = (graphArray) => {
    graphArray = graphArray.fill(null).map(() => []);
    graphArray[0].push(new Edge(0, 1));
    graphArray[0].push(new Edge(0, 4));
    // graphArray[0].push(new Edge(0, 2));

    // graphArray[1].push(new Edge(1, 0));
    // graphArray[1].push(new Edge(1, 3));

    // graphArray[2].push(new Edge(2, 0));
    // graphArray[2].push(new Edge(2, 4));
    graphArray[2].push(new Edge(2, 3));

    // graphArray[3].push(new Edge(3, 0));
    graphArray[3].push(new Edge(3, 1));
    // graphArray[3].push(new Edge(3, 4));
    // graphArray[3].push(new Edge(3, 5));

    graphArray[4].push(new Edge(4, 0));
    graphArray[4].push(new Edge(4, 1));
    // graphArray[4].push(new Edge(4, 2));
    // graphArray[4].push(new Edge(4, 3));
    // graphArray[4].push(new Edge(4, 5));

    graphArray[5].push(new Edge(5, 0));
    graphArray[5].push(new Edge(5, 2));
    // graphArray[5].push(new Edge(5, 3));
    // graphArray[5].push(new Edge(5, 4));
    // graphArray[5].push(new Edge(5, 6));

    // graphArray[6].push(new Edge(6, 5));

    setGraph(graphArray);
  };

  const bfs = (graphArray, vis, start) => {
    const queue = new Queue();
    queue.enqueue(start);
    while (!queue.isEmpty()) {
      let curr = queue.dequeue();
      if (vis[curr] === false) {
        traversalStr = traversalStr + curr + ' ';
        vis[curr] = true;

        for (let i = 0; i < graphArray[curr].length; i++) {
          let edge = graphArray[curr][i];
          queue.enqueue(edge.dest);
        }
      }
    }
    setTraversedStr(traversalStr);
  };

  const dfs = (graphArray, curr, vis) => {
    console.log(curr + ' ');
    traversalStr = traversalStr + curr + ' ';
    vis[curr] = true;
    for (let i = 0; i < graphArray[curr].length; i++) {
      let edge = graphArray[curr][i];
      if (!vis[edge.dest]) {
        dfs(graphArray, edge.dest, vis);
      }
    }
  };

  const printAllPath = (graphArray, vis, curr, path, target) => {
    if (curr === target) {
      console.log(path);
      return;
    }
    for (let i = 0; i < graphArray[curr].length; i++) {
      let edge = graphArray[curr][i];
      if (!vis[edge.dest]) {
        vis[curr] = true;
        printAllPath(graphArray, vis, edge.dest, path + edge.dest, target);
        vis[curr] = false;
      }
    }
  };

  const isCycleDirected = (graphArray, vis, curr, rec) => {
    vis[curr] = true;
    rec[curr] = true;

    for (let i = 0; i < graphArray[curr].length; i++) {
      let edge = graphArray[curr][i];
      if (rec[edge.dest]) {
        return true;
      } else if (!vis[edge.dest]) {
        if (isCycleDirected(graphArray, vis, edge.dest, rec)) {
          return true;
        }
      }
    }
    rec[curr] = false;
    return false;
  };

  const topSortUtil = (graphArray, curr, vis, topSortStack) => {
    vis[curr] = true;
    for (let i = 0; i < graphArray[curr].length; i++) {
      let edge = graphArray[curr][i];
      if (!vis[edge.dest]) {
        topSortUtil(graphArray, edge.dest, vis, topSortStack);
      }
    }
    topSortStack.push(curr);
  };

  const topSort = (graphArray, V) => {
    let vis = new Array(V).fill(false);
    let topSortStack = new Stack();

    for (let i = 0; i < V; i++) {
      if (!vis[i]) {
        topSortUtil(graphArray, i, vis, topSortStack);
      }
    }

    // console.log(topSortStack);
    while (!topSortStack.isEmpty()) {
      console.log(topSortStack.pop() + ' ');
    }
  };
  // Adjeceny list get neighbour node
  const getNeighbourNode = (currentNode) => {
    if (!graph) {
      return;
    }
    for (var i = 0; i < graph[currentNode].length; i++) {
      let edge = graph[currentNode][i];
      console.log(edge.dest + ' , ', edge.wt);
    }
  };

  return (
    <div>
      <h1>Graph Structure Example!</h1>
      <img src={bfsImage} />
      <h2>BFS Traversal:</h2>
      {TraversedStr}
    </div>
  );
};

export default BFSAlgorithm;
