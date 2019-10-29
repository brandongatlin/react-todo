import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Detail = (props) => {
    // const [status, setStatus] = useState(props.complete)


    return(
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
            {/* <Button
                variant="contained"
                color="secondary"
                startIcon={<DoneSharp />}
                onClick={()=> {
                    setStatus(!status);
                }}
            >
                {status ? ("Done") : ("Not Done")}
            </Button> */}
                
            </CardActions>
        </Card>
    )
}

export default Detail;