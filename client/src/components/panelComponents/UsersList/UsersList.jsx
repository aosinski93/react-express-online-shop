import React, {Fragment} from 'react';
import {Container, List, Grid} from "@material-ui/core";
import UserListItem from '../UserListItem/UserListItem';
import PropTypes from 'prop-types';

const UserList = (props) => {

  return (
    <Container>
      {props.users.length > 0 ?
        <Fragment>
          <Grid container>
            <Grid item lg={3}></Grid>
            <Grid item lg={3}></Grid>
            <Grid item lg={3}></Grid>
            <Grid item lg={3}>Is admin?</Grid>
          </Grid>
          <List>
            {props.users.map(user => {
              return <UserListItem key={user._id} user={user} toggleAdmin={props.toggleAdmin} />
            })}
          </List>
        </Fragment> : 'No users'}
    </Container>
  )
};

UserList.propTypes = {
  users: PropTypes.array,
  toggleAdmin: PropTypes.func,
  user: PropTypes.object
}
export default UserList;