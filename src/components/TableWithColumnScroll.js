import React, { useState, useRef } from 'react';

const data = [
  {
    id: 1,
    question: 'What is your name?',
    optionA: 'John',
    optionB: 'Jane',
    editableOption: 'John',
    subRows: 'Test',
    column9: '',
  },
  // Additional rows here...
];

const TableWithColumnScroll = () => {
  const [tableData, setTableData] = useState(data);
  const [columnWidths, setColumnWidths] = useState(new Array(9).fill(100)); // Default width for 9 columns
  const resizerRefs = useRef([]);

  const handleMouseDown = (index) => (event) => {
    const startX = event.clientX;
    const startWidth = columnWidths[index];
    document.body.style.userSelect = 'none'; // Disable text selection
    const handleMouseMove = (event) => {
      const newWidth = startWidth + (event.clientX - startX);
      setColumnWidths((prevWidths) =>
        prevWidths.map((width, i) => (i === index ? newWidth : width))
      );
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = ''; // Re-enable text selection
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ width: `${columnWidths[0]}px` }}>
              Question
              <div
                className='resizer'
                onMouseDown={handleMouseDown(0)}
                ref={(el) => (resizerRefs.current[0] = el)}
              />
            </th>
            <th style={{ width: `${columnWidths[1]}px` }}>
              Option A
              <div
                className='resizer'
                onMouseDown={handleMouseDown(1)}
                ref={(el) => (resizerRefs.current[1] = el)}
              />
            </th>
            <th style={{ width: `${columnWidths[2]}px` }}>
              Option B
              <div
                className='resizer'
                onMouseDown={handleMouseDown(2)}
                ref={(el) => (resizerRefs.current[2] = el)}
              />
            </th>
            <th style={{ width: `${columnWidths[3]}px` }}>
              Editable Option
              <div
                className='resizer'
                onMouseDown={handleMouseDown(3)}
                ref={(el) => (resizerRefs.current[3] = el)}
              />
            </th>
            <th style={{ width: `${columnWidths[4]}px` }}>
              Column 5
              <div
                className='resizer'
                onMouseDown={handleMouseDown(4)}
                ref={(el) => (resizerRefs.current[4] = el)}
              />
            </th>
            <th style={{ width: `${columnWidths[5]}px` }}>
              Sub Rows
              <div
                className='resizer'
                onMouseDown={handleMouseDown(5)}
                ref={(el) => (resizerRefs.current[5] = el)}
              />
            </th>
            <th style={{ width: `${columnWidths[6]}px` }}>
              Column 7
              <div
                className='resizer'
                onMouseDown={handleMouseDown(6)}
                ref={(el) => (resizerRefs.current[6] = el)}
              />
            </th>
            <th style={{ width: `${columnWidths[7]}px` }}>
              Column 8
              <div
                className='resizer'
                onMouseDown={handleMouseDown(7)}
                ref={(el) => (resizerRefs.current[7] = el)}
              />
            </th>
            <th style={{ width: `${columnWidths[8]}px` }}>
              Column 9
              <div
                className='resizer'
                onMouseDown={handleMouseDown(8)}
                ref={(el) => (resizerRefs.current[8] = el)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <React.Fragment key={row.id}>
              <tr>
                <td>{row.question}</td>
                <td>{row.optionA}</td>
                <td>{row.optionB}</td>
                <td>
                  <label>
                    <input
                      type='radio'
                      name={`option-${row.id}`}
                      value={row.optionA}
                      checked={row.editableOption === row.optionA}
                      onChange={() =>
                        setTableData((prevData) =>
                          prevData.map((r) =>
                            r.id === row.id ? { ...r, editableOption: row.optionA } : r
                          )
                        )
                      }
                    />
                    {row.optionA}
                  </label>
                  <label>
                    <input
                      type='radio'
                      name={`option-${row.id}`}
                      value={row.optionB}
                      checked={row.editableOption === row.optionB}
                      onChange={() =>
                        setTableData((prevData) =>
                          prevData.map((r) =>
                            r.id === row.id ? { ...r, editableOption: row.optionB } : r
                          )
                        )
                      }
                    />
                    {row.optionB}
                  </label>
                </td>
                <td>{row.column5}</td>
                <td>{'Test'}</td>
                <td>{row.column7}</td>
                <td>{row.column8}</td>
                <td>{row.column9}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithColumnScroll;
