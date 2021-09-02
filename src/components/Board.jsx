import React, { useEffect } from 'react';
import ToDo from './ToDo.jsx';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { toDosState } from '../atoms'


function Board() {
  const [toDos, setToDos] = useRecoilState(toDosState);
  

  useEffect(() => {
    const getToDos = async () => {
      const result = await axios('http://127.0.0.1:3000/to_do');
      setToDos(result.data); 
    };
    getToDos();
  }, []);
  

  return toDos.map((toDo) => (
    <div>
      {console.log(toDos)}
      <ToDo
        title={toDo.title}
        description={toDo.description}
        id={toDo.id}
        done={toDo.done}
      />
    </div>
  ));
}

export default Board;