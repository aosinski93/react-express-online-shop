import React from 'react';
import { Card, CardHeader, CardContent, Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    contactOption: {
        minHeight: '250px',
        backgroundColor: 'lightgray'
    }
}))

const ContactOption = (props) => {
    const classes = useStyles();
    return (
        <Card raised={true} className={classes.contactOption}>
            <CardHeader avatar={props.optionIcon} title={props.optionName} />
            <CardContent>
                <Box align='center' p={5}>
                    <Typography variant={'h6'} align='center'>
                        {props.optionData}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ContactOption;