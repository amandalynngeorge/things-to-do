import React, { useEffect } from 'react';
import ToDo from './ToDo.jsx';
import axios from 'axios';
import {useRecoilState, useRecoilValue } from 'recoil';
import {
  toDoListState,
  incompleteToDosSelector,
  completeToDosSelector
} from '../atoms'
import { Grid } from "@material-ui/core";

function Board() {
  const incompleteToDos = useRecoilValue(incompleteToDosSelector);
  
  const completeToDos = useRecoilValue(completeToDosSelector);
  const [toDoList, setToDoList] = useRecoilState(toDoListState);
  console.log(incompleteToDos)
  console.log(completeToDos)
  useEffect(() => {
    const getToDoList = async () => {
      const result = await axios('http://127.0.0.1:3000/to_do');
      setToDoList(result.data); 
    };
    getToDoList();
  }, [setToDoList]);

  const handleStatusChange = (newStatus, toDo) =>{
    const url = `http://localhost:3000/to_do/${toDo.id}`;
    axios.put(url, {
      id: toDo.id,
      title: toDo.title,
      description: toDo.description,
      status: newStatus
    })
    .then((response) => {
      const toDoListCopy = [...toDoList];
      let foundIndex = toDoListCopy.findIndex(toDoCopy => toDo.id === toDoCopy.id);
      toDoListCopy[foundIndex] = response.data;
      setToDoList(toDoListCopy);
    })
    .catch((err) => console.log(err));
  }
    
  return (
    <div>
      <Grid container spacing={2}>
        <Grid>
          <h1>To Do</h1>
          {incompleteToDos.map((toDo) => (   
              <ToDo 
                key={toDo.id} 
                toDo={toDo}
                onStatusChange={handleStatusChange}
              />
            ))
          }
        </Grid>
        <Grid>
          <h1>Done</h1>
          {
            completeToDos.map((toDo) => (
              
              <ToDo
                key={toDo.id}
                toDo={toDo}
                onStatusChange={handleStatusChange}
              />
              
            ))
          }

        </Grid>
      </Grid>
    </div>
    
  );
}

export default Board;