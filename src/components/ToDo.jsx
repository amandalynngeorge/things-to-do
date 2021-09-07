import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DoneButton from './DoneButton.jsx'

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

export default function ToDo({toDo}) {
  const classes = useStyles();
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {toDo.title}
        </Typography>
        <DoneButton toDo={toDo}
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