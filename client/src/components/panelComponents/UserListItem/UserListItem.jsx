import React, {Fragment } from 'react';
import {Grid, ListItem, Typography} from '@material-ui/core';
import Switch from '@material-ui/core/Switch'
import Loader from '../../commonComponents/Loader/Loader';
import PersonIcon from '@material-ui/icons/Person'
import PropTypes from 'prop-types';

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

UserListItem.propTypes = {
  user: PropTypes.object,
  email: PropTypes.string,
  username: PropTypes.string,
  isAdmin: PropTypes.bool,
  _id: PropTypes.string,
  toggleAdmin: PropTypes.func
};

export default UserListItem;