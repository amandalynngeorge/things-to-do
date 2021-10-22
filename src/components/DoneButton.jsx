import React from 'react';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab'


function DoneButton({toDoStatus, onStatusChange}) {

  return (
    <ToggleButtonGroup
      value={toDoStatus}
      onChange={onStatusChange}
      exclusive
    >
      <ToggleButton
        value={'incomplete'}
        
      >
        Incomplete
      </ToggleButton>
      <ToggleButton
        value={'complete'}

      >
        Done
      </ToggleButton>
    </ToggleButtonGroup>
  )
};

export default DoneButton;