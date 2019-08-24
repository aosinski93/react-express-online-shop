import React from 'react';
import {Card, CardHeader, CardContent, Box, makeStyles, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  contactOption: {
    minHeight: '250px',
    backgroundColor: '#9f8560'
  }
}));

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

ContactOption.propTypes = {
  optionIcon: PropTypes.node,
  optionName: PropTypes.string,
  optionData: PropTypes.object
};

export default ContactOption;