import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Btn from '../../Btn';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '../../Checkbox';
import Button from '@material-ui/core/Button';
import DoneSharp from '@material-ui/icons/DoneAllSharp';




const Detail = (props) => {
    const [status, setStatus] = useState(props.complete)

    console.log(props)

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