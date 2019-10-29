import React, {useState} from 'react';
import { graphql, Query, Mutation } from "react-apollo";
import { getTodos, deleteTodo } from "../../../queries";
import * as compose from 'lodash.flowright';

import Card from '../../Card';
import Detail from '../Detail';
import Button from '@material-ui/core/Button';


const AllTodos = (props)=> {

    const [currentTitle, setCurrentTitle] = useState("Click A Card");
    const [currentDescription, setCurrentDescription] = useState("To View The Task Detail");
    const [currentId, setCurrentId] = useState("");
    
    
    return( 
        <Query query={getTodos}>
            {({ loading, error, data }) => {
                if (loading) return <div>loading...</div>;
                if (error) return `Error!: ${error}`;
                if(data.tasks){
                    
                    return( 
                        <Mutation mutation={deleteTodo}>
                            {deleteTodo => (
                                <div>
                            {data.tasks.map((task) => {
                                if(task.title && !task.completed){
                                    
                                    return (
                                        <div id={task.id} className="todo-card" key={ task.id }
                                            onClick={()=> {
                                                setCurrentTitle(task.title);
                                                setCurrentDescription(task.description);
                                                setCurrentId(task.id);
                                            }}>
                                            <Card task={task.id} title={ task.title } text={ task.description } checked={ task.completed } />
                                            <Button
                                                value={task.id}
                                                variant="contained"
                                                color="secondary"
                                                onClick={async (e) => {
                                                    const id = e.currentTarget.value;
                                                    await deleteTodo({
                                                        variables: {id},
                                                        refetchQueries: [{ query: getTodos }]
                                                      });
                                                }}
                                            >
                                                Delete
                                            </Button>
                                            
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })
                            }
                            <Detail id={currentId} title={currentTitle} description={currentDescription} />
                        </div>
                            )}
                        
                        </Mutation>
                    );
                }
            }}
        </Query>
    );
}

export default compose(
    graphql(getTodos, {
      name: "getTodos"
    }),
    graphql(deleteTodo, {
      name: "deleteTodo"
    })
  )(AllTodos);