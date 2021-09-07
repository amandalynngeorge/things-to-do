import React, { useEffect } from 'react';
import ToDo from './ToDo.jsx';
import axios from 'axios';
import { useRecoilState, selector } from 'recoil';
import { toDoListState } from '../atoms'


function Board() {
  const [toDoList, setToDoList] = useRecoilState(toDoListState);

  useEffect(() => {
    const getToDoList = async () => {
      const result = await axios('http://127.0.0.1:3000/to_do');
      setToDoList(result.data); 
    };
    getToDoList();
  }, []);


    
  return toDoList.map((toDo) => (
    <div>
      <ToDo key={toDo.id} toDo={toDo}/>
    </div>
  ));
}

export default Board;