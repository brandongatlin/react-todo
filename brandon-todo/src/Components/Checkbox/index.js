import React from 'react';
import Switch from '@material-ui/core/Switch';


const Checkbox = (props) => {
const [checked, setChecked] = React.useState(props.checked);

    return(
    <Switch
    checked={checked}
    onChange={(e) => {
        console.log(e.target);
        setChecked(!checked);
        console.log(checked);
    }}
    value={checked}
    inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
    );
}

export default Checkbox;


