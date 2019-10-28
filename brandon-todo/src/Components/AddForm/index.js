import React, {useState} from 'react';
import { Mutation, graphql } from 'react-apollo'
import * as compose from 'lodash.flowright';
import TextField from '@material-ui/core/TextField';
import {addTodoQuery, getTodos} from '../../queries';
import { useMutation } from "@apollo/react-hooks";


const AddForm = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [ addTodo, { error, loading }] = useMutation(addTodoQuery);

    
    return(
        <Mutation
        mutation={addTodoQuery}>
            {() => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

        return(
            <form
                onSubmit={async (e)=> {
                    e.preventDefault();
                    await addTodo({
                            variables: {title: title, description: description }, refetchQueries: [{ query: getTodos }]
                        }
                    );
                    setTitle("");
                    setDescription("");
                }}
            >
                <TextField
                    required
                    // label="Required"
                    placeholder="Title"
                    margin="normal"
                    onChange={(e) => {
                        setTitle(e.target.value)
                        }
                    }
                    value={title}
                />
                <br/>
                <TextField
                    margin="normal"
                    placeholder="Description"

                    onChange={(e) => {
                        setDescription(e.target.value);
                        }
                    }
                    value={description}
                />
                <br/>
                <button type='submit'>Submit</button>
                <hr/>
            </form>
        )
    }}
        </Mutation>

    )
}

export default compose(
    graphql(addTodoQuery, {
      name: "addTodoQuery"
    }),
    graphql(getTodos, {
      name: "getTodos"
    })
  )(AddForm);