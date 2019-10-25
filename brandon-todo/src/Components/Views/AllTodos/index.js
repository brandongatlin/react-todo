import React from 'react';

import { graphql, Query } from "react-apollo";
import { getTodos } from "../../../queries";

import Grid from '@material-ui/core/Grid';
import Card from '../../Card';


const AllTodos = (props)=> {
    
    return( 
        <Query query={getTodos}>

            {({ loading, error, data }) => {
                if (loading) return <div>loading...</div>;
                if (error) return `Error!: ${error}`;
                if(data.tasks){
                    // console.log(data.tasks)

                    return data.tasks.map((task) => {
                        return (
                            <Grid key={ task.id } item sm={ 12 }>
                                <Card title={ task.title } text={ task.description } checked={ task.completed } />
                            </Grid>
                        );
                    });
                }
                
                }}
        </Query>
    );
}

export default graphql(getTodos)(AllTodos);
