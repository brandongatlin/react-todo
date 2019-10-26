import React from 'react';
import Switch from '@material-ui/core/Switch';

// import { Mutation } from "react-apollo";
// import {updateCompleted} from '../../queries/index.js';


const Checkbox = (props) => {

const [checked, setChecked] = React.useState(props.checked);
const [taskId, setTaskId] = React.useState(null);

    // console.log(props)

    const updatedTask = {
        id: taskId,
        completed: checked
    }


    return(
    
        
        <Switch
            task={props.id}
            checked={checked}
            onClick={(e) => {
                setChecked(!checked);
                setTaskId(props.task);
            }}
            value={checked}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

    );
}

export default Checkbox;


