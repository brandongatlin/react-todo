import React, {useState} from 'react';
import { Mutation, withApollo } from 'react-apollo'
import TextField from '@material-ui/core/TextField';
import {addTodoQuery} from '../../queries';
import { useMutation } from "@apollo/react-hooks";


const AddForm = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [ addTodo, { data, error, loading }] = useMutation(addTodoQuery);

    
    return(
        <Mutation
        
        mutation={addTodoQuery}>
            {(addTodoQuery, { loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

        return(
            <form
                onSubmit={(e)=> {
                    e.preventDefault();
                    console.log(title, description);
                    addTodo({variables: {title: title, description: description }});
                }}
            >
                <TextField
                    required
                    label="Required"
                    margin="normal"
                    onChange={(e) => {
                        setTitle(e.target.value)
                        }
                    }
                    value={title}
                />
                <TextField
                    margin="normal"
                    onChange={(e) => {
                        setDescription(e.target.value);
                        }
                    }
                    value={description}
                />
                <button type='submit'>Submit</button>
            </form>
        )
    }}
        </Mutation>

    )
}

export default withApollo(AddForm);
