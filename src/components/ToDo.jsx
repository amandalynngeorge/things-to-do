import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DoneButton from './DoneButton.jsx'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { toDoListState } from '../atoms.js'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ToDo({toDo, onStatusChange}) {
  const classes = useStyles();
  const [status, setStatus] = useState(toDo.status)
  const [toDoList, setToDoList] = useRecoilState(toDoListState)

  const handleDoneChange = (event, newStatus) => { 
   
    setStatus(newStatus)
   

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
      status: newStatus
    })
    .then((response) => {
      console.log('response', {...toDoListCopy[index] = response.data})
      setToDoList(toDoListCopy)
    })
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {toDo.title}
        </Typography>
        <DoneButton
          onStatusChange={handleDoneChange}
          toDoStatus={toDo.status}
        />
        <Typography component="p">
          {toDo.description}
        </Typography>
        <Typography>
          {toDo.id}
        </Typography>
      </CardContent>
    </Card>
  );
  
}