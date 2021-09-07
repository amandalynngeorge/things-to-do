import React, { useState } from 'react';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { toDoListState } from '../atoms.js'
import { useSnackbar } from 'notistack';

function DoneButton({toDo}) {
  const [done, setStatus] = useState(toDo.done)
  const [toDoList, setToDoList] = useRecoilState(toDoListState)
  
  const handleChange = (event, newStatus) => { 
    console.log('click', toDo.done)
    setStatus(newStatus)
    console.log('event', event)

    if(newStatus === null) {
      console.log('this should error')
      return
    }

    const url = `http://127.0.0.1:3000/to_do/${toDo.id}`
    const toDoListCopy = [...toDoList]
    const index = toDoListCopy.findIndex(toDoIndex => toDoIndex.id === toDo.id)
    
    axios.put(url, {
      id: toDo.id,
      title: toDo.title,
      description: toDo.description,
      done: newStatus
    })
    .then((response) => {
      console.log('response', {...toDoListCopy[index] = response.data})
      setToDoList(toDoListCopy)
    })
  }

  return (
    <ToggleButtonGroup
      value={done}
      onChange={handleChange}
      exclusive
    >
      <ToggleButton value={'incomplete'}>
        Incomplete
      </ToggleButton>
      <ToggleButton value={'complete'}>
        Done
      </ToggleButton>
    </ToggleButtonGroup>
  )
};

export default DoneButton;