import React, { Component } from "react";
// import Loader from "../../commonComponents/Loader/Loader";

class ManufacturersList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.data !== []) {
      this.setState({
        loading: false
      });
    }
  };

  buildList = () => {
    if (this.props.data !== []) {
      return (
        <ul className="manufacturersList">
          {this.props.data.map(item => {
            return (
              <li key={item._id} id={item._id}>
                {item.name}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <p>No manufacturers</p>;
    }
  };

  render() {
    return (
      <div className="manufacturersListWrapper col-lg-6">
        {/* {this.state.loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          this.buildList()
        )} */}
        {this.buildList()}
      </div>
    );
  }
}
export default ManufacturersList;
