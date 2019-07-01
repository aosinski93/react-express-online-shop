import React from 'react';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    listItem: {
        margin: theme.spacing(2)
    }
}));

const DeviceListItem = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.listItem}>
            <CardContent>
                {props.device.name}
            </CardContent>
        </Card>
    );
};

export default DeviceListItem;