import React from 'react';

const App = () => {
  return (
    <div className='table-container'>
      <div className='freeze-column'>
        <table className='main-table'>
          <thead>
            <tr>
              <th>Main Header 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Question</td>
            </tr>
            <tr>
              <td>Data 1</td>
            </tr>
            <tr>
              <td>Data 5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='scrollable-table'>
        <table className='main-table'>
          <thead>
            <tr>
              <th colSpan='4'>Main Table Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <table className='sub-table sub-table-1'>
                  <thead>
                    <tr>
                      <th>Header 2</th>
                      <th>Header 3</th>
                      <th>Header 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data 2</td>
                      <td>Data 3</td>
                      <td>Data 4</td>
                    </tr>
                    <tr>
                      <td>Data 6</td>
                      <td>Data 7</td>
                      <td>Data 8</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className='sub-table sub-table-2'>
                  <thead>
                    <tr>
                      <th>Header 2</th>
                      <th>Header 3</th>
                      <th className='span-header'>Header 4</th>
                      <th className='span-header'>Header 5</th>
                      <th className='span-header'>Header 6</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data 2</td>
                      <td className='span-header'>Data 3</td>
                      <td className='span-header'>Data 4</td>
                      <td className='span-header'>Data 5</td>
                      <td className='span-header'>Data 6</td>
                    </tr>
                    <tr>
                      <td>Data 8</td>
                      <td className='span-header'>Data 9</td>
                      <td className='span-header'>Data 10</td>
                      <td className='span-header'>Data 11</td>
                      <td className='span-header'>Data 12</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className='sub-table sub-table-3'>
                  <thead>
                    <tr>
                      <th>Header 2</th>
                      <th>Header 3</th>
                      <th>Header 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data 2</td>
                      <td>Data 3</td>
                      <td>Data 4</td>
                    </tr>
                    <tr>
                      <td>Data 6</td>
                      <td>Data 7</td>
                      <td>Data 8</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
