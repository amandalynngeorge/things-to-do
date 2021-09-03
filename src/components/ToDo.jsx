import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

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
        <Checkbox
          value="done"
          inputProps={{ 'aria-label': 'Done' }}
          checked={toDo.done}
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