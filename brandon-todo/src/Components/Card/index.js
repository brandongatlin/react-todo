import React from 'react';
import './index.css';

import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const Card = (props)=> {
    return(
        <Grid item xs={12}>
            <Paper>
                <Typography variant="h5" component="h3">
                    {props.title}
                </Typography>
                <Typography component="p">
                    {props.text}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Card;