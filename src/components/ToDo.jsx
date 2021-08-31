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

export default function ToDo() {
  const classes = useStyles();

  let item = {
    "id": 1,
    "title": "Create the app",
    "description": "Start the new project with create-react-app",
    "done": false
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {item.title}
        </Typography>
        <Checkbox
          value="done"
          inputProps={{ 'aria-label': 'Done' }}
          checked={item.done}
        />
        <Typography component="p">
          {item.description}
        </Typography>
        <Typography>
          {item.id}
        </Typography>
      </CardContent>
    </Card>
  );
}