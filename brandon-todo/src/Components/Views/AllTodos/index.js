import React, {useState} from 'react';

import { graphql, Query } from "react-apollo";
import { getTodos } from "../../../queries";

import Grid from '@material-ui/core/Grid';
import Card from '../../Card';
import Detail from '../Detail';
import Button from '@material-ui/core/Button';


const AllTodos = (props)=> {

    const [currentTitle, setCurrentTitle] = useState("Click A Card");
    const [currentDescription, setCurrentDescription] = useState("To View The Task Detail");
    const [status, setStatus] = useState(false)

    console.log(props)

    
    return( 
        <Query query={getTodos}>
            {({ loading, error, data }) => {
                if (loading) return <div>loading...</div>;
                if (error) return `Error!: ${error}`;
                if(data.tasks){
                    
                    return( 
                        <div>
                            {data.tasks.map((task) => {
                                if(task.title){
                                    
                                    return (
                                        <div key={ task.id }>
                                        <Grid 
                                            onClick={()=> {
                                                console.log(task.title)
                                                setCurrentTitle(task.title)
                                                setCurrentDescription(task.description)
                                            }}  item sm={ 12 }>
                                            <Card task={task.id} title={ task.title } text={ task.description } checked={ task.completed } />
                                        </Grid>
                                        <Button
                                            variant='outlined'
                                            color="secondary"
                                            onClick={()=> {
                                                setStatus(!status);
                                            }}
                                        >{status ? ("Done") : ("Not Done")}
                                        </Button>
                                        </div>
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
