import React from 'react';
// import AdjecencyListGraph from './graphDataStructure/AdjecencyListGraph';
import BFSAlgorithm from './graphDataStructure/BFSAlgorithm';
// import DebouncingThrotelling from './components/DebouncingExample';
import './App.css';

function App() {
  return (
    <div className='graph-container'>
      <BFSAlgorithm />
    </div>
  );
}

export default App;
