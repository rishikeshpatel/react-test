import React, { useState, useRef } from 'react';
import './App.css'; // Include necessary CSS for styling
import TableWithColumnScroll from './components/TableWithColumnScroll';
import TableWithSubTables from './components/TbaleWithSubTable';
import BFSAlgorithm from './graphDataStructure/BFSAlgorithm';

const App = () => {
  return (
    <div>
      <TableWithSubTables />
    </div>
  );
};

export default App;
