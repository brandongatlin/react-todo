import React from 'react';
import './index.css';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Checkbox from '../Checkbox';

const Card = (props)=> {
    return(
        <Paper className={"paper"}>
            <Typography variant="h5" component="h3">
                {props.title}
            </Typography>
            <Typography component="p">
                {props.text}
            </Typography>
            <Checkbox checked={props.checked} value={props.checked}/>
        </Paper>
    );
}

export default Card;