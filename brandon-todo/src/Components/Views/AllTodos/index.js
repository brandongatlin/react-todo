import React from 'react';

import Grid from '@material-ui/core/Grid';

import Card from '../../Card';
// import Checkbox from '../../Checkbox';

const data = [
    {
        id : 1,
        title : "title here",
        text : "first",
        checked : false
    },
    {
        id : 2,
        title : "title here",
        text : "second",
        checked : true
    },
    {
        id : 3,
        title : "title here",
        text : "third",
        checked : false
    },
]

const AllTodos = (props)=> {
    return(
        <Grid container spacing={3}>
            {data.map((task)=> {
                return (
                    <Grid key={task.id} item sm={12}>
                        <Card title={task.title} text={task.text} checked={task.checked}/>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default AllTodos;