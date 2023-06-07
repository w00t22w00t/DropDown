import React, { useState } from 'react';
import './styles/App.scss';
import DropDown from './DropDown/DropDown';
import { fetchType, Settings } from './types';
import axios from 'axios';

const testParagraph = <p>test</p>;

function App() {
  const fetchUser: fetchType = async (search) => {
    if (search.length === 0) return false;

    try {
      const response = await axios.get(`https://api.github.com/users/${search}`);
      const data = response.data;

      console.log(data.name);
    } catch (event) {
      alert(event);
    }
  };

  const test1: Settings = {
    variants: [
      {
        text: 'Item 3',
        customElement: testParagraph,
        style: { background: 'red', display: 'flex', justifyContent: 'space-between' },
      },
    ],
    customFetch: fetchUser,
  };

  const test2: Settings = {
    variants: [{ text: 'Item 4', customElement: testParagraph, customClass: 'dd__custom-class' }],
  };

  const test3: Settings = {
    variants: [{ text: 'Item 5' }],
  };

  return (
    <div className="App">
      <DropDown settings={test1} />
      <DropDown settings={test2} />
      <DropDown settings={test3} />
    </div>
  );
}

export default App;
