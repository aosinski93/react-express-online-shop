import React, { Fragment } from 'react';
import { Grid, makeStyles, Card, CardContent, Typography, Box, CardHeader, Avatar, List, ListItem } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

const useStyles = makeStyles(theme => ({
    dataWrapper: {
        margin: theme.spacing(1),
        padding: theme.spacing(3),
        minHeight: '150px',
        border: '1px solid #999'
    }
}))

const AdminPanelIndex = (props) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Box mt={4}>
                <Grid container>
                    <Grid item lg={4}>
                        <Card className={classes.dataWrapper} raised={true}>
                            <CardContent>
                                <Grid container alignItems='center' justify='center'>
                                    <Grid item lg={8}>
                                        <Typography>Total orders</Typography>
                                        <Typography>555</Typography>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <LocalShippingIcon fontSize='large' />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4}>
                        <Card className={classes.dataWrapper} raised={true}>
                            <CardContent>
                                <Grid container alignItems='center'>
                                    <Grid item lg={8}>
                                        <Typography>Total icome</Typography>
                                        <Typography>555</Typography>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <AttachMoneyIcon fontSize='large' />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4}>
                        <Card className={classes.dataWrapper} raised={true} >
                            <CardContent>
                                <Grid container alignItems='center'>
                                    <Grid item lg={8}>
                                        <Typography>Total visits</Typography>
                                        <Typography>{ props.pageVisits }</Typography>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <ImportantDevicesIcon fontSize='large' />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box mt={4}>
                <Grid container>
                    <Grid item lg={12}>
                        <Card className={classes.dataWrapper} raised={true}>
                            <CardHeader avatar={
                                <Avatar aria-label='Recent Orders'>
                                    <LocalShippingIcon />
                                </Avatar>
                            }
                                title="Recent orders" />
                            <CardContent>
                                <List>
                                    <ListItem>Single Order</ListItem>
                                    <ListItem>Single Order</ListItem>
                                    <ListItem>Single Order</ListItem>
                                    <ListItem>Single Order</ListItem>
                                    <ListItem>Single Order</ListItem>
                                    <ListItem>Single Order</ListItem>
                                    <ListItem>Single Order</ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    );
};

export default AdminPanelIndex;