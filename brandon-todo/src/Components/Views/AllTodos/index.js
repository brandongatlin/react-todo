import React, {useState} from 'react';

import { graphql, Query } from "react-apollo";
import { getTodos } from "../../../queries";

import Grid from '@material-ui/core/Grid';
import Card from '../../Card';
import Detail from '../Detail';


const AllTodos = (props)=> {

    const [currentTitle, setCurrentTitle] = useState("Click A Card");
    const [currentDescription, setCurrentDescription] = useState("To View The Task Detail");
    
    return( 
        <Query query={getTodos}>
            {({ loading, error, data }) => {
                if (loading) return <div>loading...</div>;
                if (error) return `Error!: ${error}`;
                if(data.tasks){
                    // setCurrentTitle(props.data.tasks[0].title)
                    // setCurrentDescription(props.data.tasks[0].description)
                    return( 
                        <div>
                            {data.tasks.map((task) => {
                                if(task.title){
                                    
                                    return (
                                        <Grid 
                                            onClick={()=> {
                                                console.log(task.title)
                                                setCurrentTitle(task.title)
                                                setCurrentDescription(task.description)
                                            }} key={ task.id } item sm={ 12 }>
                                            <Card task={task.id} title={ task.title } text={ task.description } checked={ task.completed } />
                                        </Grid>
                                    );
                                } else {
                                    return null;
                                }
                            })
                            }
                            <Detail title={currentTitle} description={currentDescription} />
                        </div>
                    );
                }
            }}
        </Query>
    );
}

export default graphql(getTodos)(AllTodos);
