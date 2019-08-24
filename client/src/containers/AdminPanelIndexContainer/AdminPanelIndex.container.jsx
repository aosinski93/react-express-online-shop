import React, {Component} from 'react';
import {connect} from "react-redux";
import AdminPanelIndex from '../../components/panelComponents/AdminPanelIndex/AdminPanelIndex';

class AdminPanelIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'pageVisits': ''
    }
  }

  componentDidMount = () => {
    if (this.state.dbError !== true) {
      fetch('/', {
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
    }
  };

  render() {
    return (
      <div>
        <AdminPanelIndex pageVisits={+this.state.pageVisits} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dbError: state.global.dbError
});

export default connect(
  mapStateToProps,
  null
)(AdminPanelIndexContainer);