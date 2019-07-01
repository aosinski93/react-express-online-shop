import React, { Component } from 'react';
import AdminPanelIndex from '../../components/panelComponents/AdminPanelIndex/AdminPanelIndex';

class AdminPanelIndexContainer extends Component {
    constructor() {
        super();
        this.state = {
            'pageVisits': ''
        }
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'aplication/json'
            }
        })
            .then(res => res.json())
            .then(stat => {
                this.setState({
                    pageVisits: stat.pageVisits
                })
            })
    };

    render() {
        return (
            <div>
                <AdminPanelIndex pageVisits={this.state.pageVisits} />
            </div>
        );
    }
}

export default AdminPanelIndexContainer;