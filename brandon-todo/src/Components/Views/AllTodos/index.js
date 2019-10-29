import React, {useState} from 'react';
import { graphql, Query } from "react-apollo";
import { getTodos } from "../../../queries";
import * as compose from 'lodash.flowright';

import Card from '../../Card';
import Detail from '../Detail';


const AllTodos = (props)=> {

    const [currentTitle, setCurrentTitle] = useState("");
    const [currentDescription, setCurrentDescription] = useState("");
    const [currentId, setCurrentId] = useState("");
    
    
    return( 
        <Query query={getTodos}>
            {({ loading, error, data }) => {
                if (loading) return <div>loading...</div>;
                if (error) return `Error!: ${error}`;
                if(data.tasks){
                    
                    return( 
                        <div>
                        <div>
                            {data.tasks.map((task) => {
                                if(task.title){
                                    
                                    return (
                                        <div id={task.id} className="todo-card" key={ task.id }
                                            onClick={()=> {
                                                setCurrentTitle(task.title);
                                                setCurrentDescription(task.description);
                                                setCurrentId(task.id);
                                            }}>
                                            <Card task={task.id} title={ task.title } text={ task.description } checked={ task.completed } />
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })
                            }
                        </div>
                        <Detail id={currentId} title={currentTitle} description={currentDescription} />
                        </div>
                    );
                }
            }}
        </Query>
    );
}

export default compose(
    graphql(getTodos, {
      name: "getTodos"
    })
  )(AllTodos);