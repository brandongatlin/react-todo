import React from 'react';

import Grid from '@material-ui/core/Grid';

import Card from '../../Card';
import Checkbox from '../../Checkbox';

const data = [
    {
        id : 1,
        title : "title here",
        text : "first",
        done : false
    },
    {
        id : 2,
        title : "title here",
        text : "second",
        done : true
    },
    {
        id : 3,
        title : "title here",
        text : "third",
        done : false
    },
]

const AllTodos = (props)=> {
    return(
        <Grid container spacing={3}>
            {data.map((task)=> {
                return (
                    <div key={task.id}>
                        <Card  title={task.title} text={task.text}/>
                        <Checkbox checked={task.done} value={task.done}/>
                    </div>
                );
            })}
        </Grid>
    );
}

export default AllTodos;