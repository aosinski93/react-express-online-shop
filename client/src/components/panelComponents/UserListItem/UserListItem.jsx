import React, { Fragment } from 'react';
import { Grid, ListItem, Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch'
import Loader from '../../commonComponents/Loader/Loader';
import PersonIcon from '@material-ui/icons/Person'

const UserListItem = (props) => {
  return (
    <Fragment>
      {props.length !== 0
        ? (
          <ListItem button>
            <Grid container alignItems='center'>
              <Grid item lg={3}>
                <PersonIcon />
              </Grid>
              <Grid item lg={3}>
                <Typography>
                  {props.user.username}
                </Typography>
              </Grid>
              <Grid item lg={3}>
                <Typography>
                  {props.user.email}
                </Typography>
              </Grid>
              <Grid item lg={3}>
                <Switch
                  checked={props.user.isAdmin}
                  onClick={props.toggleAdmin}
                  data-id={props.user._id}
                  color="primary"
                />
              </Grid>
            </Grid>
          </ListItem>
        )
        :
        <Loader />
      }
    </Fragment>
  )
};

export default UserListItem;