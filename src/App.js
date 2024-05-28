import React, { useMemo, useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
import { useTable } from 'react-table';
// import { useEffect, useReducer } from 'react';
// import { cartReducer } from './reducer/cartReducer';
// import Products from './components/Products';
// import Cart from './components/Cart';

const MOCK_DATA = [
  {
    id: 1,
    first_name: 'Dallas',
    last_name: 'Geibel',
    email: 'dgeibel0@twitter.com',
    gender: 'Male',
    date_of_birth: '2/3/2022',
    age: 25,
    country: 'Slovenia',
    phone: '2107768258',
  },
  {
    id: 2,
    first_name: 'Toby',
    last_name: 'Mullineux',
    email: 'tmullineux1@sina.com.cn',
    gender: 'Male',
    date_of_birth: '3/16/2022',
    age: 47,
    country: 'China',
    phone: '5981931450',
  },
  {
    id: 3,
    first_name: 'Keen',
    last_name: 'Sexten',
    email: 'ksexten2@a8.net',
    gender: 'Male',
    date_of_birth: '2/2/2022',
    age: 60,
    country: 'China',
    phone: '1761395128',
  },
  {
    id: 4,
    first_name: 'Shantee',
    last_name: 'Conwell',
    email: 'sconwell3@intel.com',
    gender: 'Female',
    date_of_birth: '4/18/2022',
    age: 34,
    country: 'Indonesia',
    phone: '3372973788',
  },
  {
    id: 5,
    first_name: 'Meaghan',
    last_name: 'Agett',
    email: 'magett4@bloglovin.com',
    gender: 'Female',
    date_of_birth: '11/17/2021',
    age: 22,
    country: 'United States',
    phone: '8161423968',
  },
];

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Date of Birth',
    accessor: 'date_of_birth',
  },
  {
    Header: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
];

function App() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const [temp1, settemp1] = useState(2);
  const [temp2, settemp2] = useState(2);

  const tableInstance = useTable({
    columns,
    data,
  });

  useEffect(() => {
    settemp2(temp2);
  }, [temp1]);

  useEffect(() => {
    settemp1(temp1);
  }, [temp2]);

  // const populateData = (values, data) => {
  //   let newArr = [];
  //   values.forEach((answer, index) => {
  //     let temp = data[index];
  //     answer.followupData.forEach((item, i)=> {
  //       temp[i].answer = item.answer;
  //       temp[i].freetext = item.freetext;
  //       temp[i].optional = item.optional;
  //     });
  //   })
  //   newArr.push(temp);
  //   temp = [];
  //   return nreArr;
  // }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  return (
    <div tabIndex={0} aria-label='Press tab to select table'>
      Table data below
      <button>test 1</button>
      <button>test 2</button>
      <label>Press tab to select table</label>
      <table {...getTableProps()} tabIndex='0' aria-label='Case search'>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th key={i} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row.getRowProps()} tabIndex={0}>
                {row.cells.map((cell, i) => {
                  return (
                    <td key={i} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
