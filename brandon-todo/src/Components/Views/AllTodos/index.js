import React from 'react';

import { graphql, Query } from "react-apollo";
import { getTodos } from "../../../queries";

import Grid from '@material-ui/core/Grid';
import Card from '../../Card';

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
        <Query query={getTodos}>

            {({ loading, error, data }) => {
                if (loading) return <div>loading...</div>;
                if (error) return `Error!: ${error}`;
                {console.log(data)}

                    {data.map((task)=> {
                        return (
                            <Grid key={task.id} item sm={12}>
                                <Card title={task.title} text={task.text} checked={task.checked}/>
                            </Grid>
                        );
                    })}
                }}

        </Query>

    );
}

export default graphql(getTodos)(AllTodos);
