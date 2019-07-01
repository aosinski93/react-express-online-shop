import React from 'react';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
                <Grid container justify='space-between'>
                    <Grid item lg={6} md={6}>
                        <Typography align="center">
                            {props.device.name}
                        </Typography>
                    </Grid>
                    <Grid item lg={6} md={6}>
                        <Typography align="center">
                            ${props.device.price}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify='space-between'>
                    <Grid item lg={6} md={6}>
                        <Typography align="center">
                            {props.device.manufacturer.name}
                        </Typography>
                    </Grid>
                    <Grid item lg={6} md={6}>
                        <Typography align="center">
                            {props.device.operating_system}
                        </Typography>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
};

export default DeviceListItem;