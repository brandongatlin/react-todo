import React from 'react';
import { graphql, Mutation } from "react-apollo";
import { markComplete, getTodos } from "../../../queries";
import * as compose from 'lodash.flowright';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Detail = (props) => {

    return(
        <Mutation mutation={markComplete}>
            {markComplete => (
            <Card id="detail">
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    color="primary"
                    variant="contained"
                    value={props.id}
                    onClick={async (e)=> {
                        const id = e.currentTarget.value;
                        await markComplete({
                            variables: {id},
                            refetchQueries: [{ query: getTodos }]
                        })
                        
                    }}
                >Update
                </Button>
            </CardActions>
        </Card>
            )}
        </Mutation>
        
    )
}

export default compose(
    graphql(markComplete, {
      name: "markComplete"
    }),
    graphql(getTodos, {
      name: "getTodos"
    })
  )(Detail);