import React, { useState } from 'react';

const DebouncingThrotelling = () => {
  const [inputText, setInputtext] = useState('');
  let setTimeOutObj = null;

  const hadnleChange = (e) => {
    if (setTimeOutObj) {
      clearTimeout(setTimeOutObj);
    }
    setTimeOutObj = setTimeout(() => {
      setInputtext(e.target.value);
    }, 1000);
  };

  // Throtlling to execute callBack once 1500 ms has pased from the previous click!
  const throtleFunction = (callback, delay) => {
    let prev = 0;
    return (...arg) => {
      let now = new Date().getTime();
      if (now - prev > delay) {
        prev = now;
        return callback(...arg);
      }
    };
  };

  const debouncingFunction = (callback, delay) => {
    let timeoutObj = null;
    return (...arg) => {
      if (timeoutObj) {
        clearTimeout(timeoutObj);
      }
      timeoutObj = setTimeout(() => {
        return callback(...arg);
      }, delay);
    };
  };

  return (
    <div>
      <h1>Debouncing Throtelling example!</h1>
      <input type='text' onChange={hadnleChange} />
      <button
        name='Throtal text input change'
        onClick={debouncingFunction((arg) => {
          console.log(arg, 'Button clicked!');
        }, 500)}
        title='Throtle'
      >
        Click!
      </button>
      <h1>Entered text: {inputText}</h1>
    </div>
  );
};

export default DebouncingThrotelling;
