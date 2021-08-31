import React, { useState, useEffect } from 'react';
import ToDo from './ToDo.jsx';
import axios from 'axios';

export default function Board() {
  const [data, setData] = useState({items: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://127.0.0.1:3000/to_do');
      setData(result.data);
    };
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>Things To Do</h1> 
      <p>{console.log('The Things:', data)}</p>
      <ToDo/>
    </div>
  )
}