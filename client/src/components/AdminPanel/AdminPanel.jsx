import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import PanelProducts from '../PanelProducts/PanelProducts';


class AdminPanel extends Component {
         render() {
          console.log(this.props);
        return (
                <div>
                    {this.props.loggedIn === true
                        ? 'hi'
                        : <Redirect to='/login' />
                        }

                    <Link to="/admin/products">Products</Link>
                    <Link to="/admin/menu">Menu items</Link>
                    <Link to="/admin/manufacturers">Manufacturers</Link>

                    <Route path="/admin/products" component={PanelProducts} />

                </div>
        )
    }
}

export default AdminPanel;