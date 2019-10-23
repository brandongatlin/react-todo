import React from 'react';
import Button from '@material-ui/core/Button';


const Btn = (props) => {
    return(
    <div>
        <Button
        id={props.id}
        className={props.classNames}
        variant={props.variant}
        color={props.color}
        size={props.size}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
      >
        {props.text}
      </Button>
    </div>
    );
}

export default Btn;