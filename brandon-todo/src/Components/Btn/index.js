import React from 'react';
import Button from '@material-ui/core/Button';


const Btn = (props) => {
    return(
        <Button
        variant={props.variant}
        color={props.color}
        size={props.size}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
      >
        {props.text}
      </Button>
    );
}

export default Btn;