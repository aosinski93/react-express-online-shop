import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleAdmin } from '../../actions/userActions';
import UserList from '../../components/panelComponents/UsersList/UsersList';

class UsersListContainer extends Component {

    handleToggleAdmin = (e) => {
        console.log(e.currentTarget.dataset.id);
        
        this.props.toggleAdmin(e.currentTarget.dataset.id)
    }

    render() {
        return (
            <UserList users={this.props.users} toggleAdmin={this.handleToggleAdmin} />
        )
    }
}

const mapStateToProps = state => ({
    users: state.panel.users
})

export default connect(
    mapStateToProps,
    { toggleAdmin }
)(UsersListContainer);