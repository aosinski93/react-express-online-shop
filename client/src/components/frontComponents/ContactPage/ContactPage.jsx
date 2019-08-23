import React from 'react';
import {Container, Grid, Link, Box, Typography} from '@material-ui/core';
import ContactOption from '../ContactOption/ContactOption';
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  contactData: {
    color: '#000'
  }
}));

const ContactPage = props => {
  const classes = useStyles();
  return (
    <Box mt={5}>
      <Container>
        <Grid container spacing={5}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <ContactOption
              optionName='By phone'
              optionIcon={<PhoneIcon />}
              optionData={<Link className={classes.contactData} href="tel:617-951-2939">617-951-2939</Link>} />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <ContactOption
              optionName='By email'
              optionIcon={<EmailIcon />}
              optionData={<Link className={classes.contactData}
                                href="mailto:contact@digistore.com">contact@digistore.com</Link>} />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <ContactOption
              optionName='Personally'
              optionIcon={<PersonIcon />}
              optionData={<Typography className={classes.contactData} component={'span'}>2724 Rainy Day Drive 02107
                Boston, MA</Typography>} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


export default ContactPage;