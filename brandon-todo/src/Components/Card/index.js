import React from 'react';
import './index.css';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const Card = (props)=> {

    return(
        <Paper
        className={"paper"}
        onClick={()=> {
            console.log(props)
            }
        }
        >
            <Typography variant="h5" component="h3">
                {props.title}
            </Typography>
            <Typography component="p">
                {props.text}
            </Typography>
        </Paper>
    );
}

export default Card;